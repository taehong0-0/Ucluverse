import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

// 트랜잭션/에러처리 필요.
@Injectable()
export class UserService {
    constructor (
        private connection: Connection
    ) {}

    async create(createUserDto: CreateUserDto) {
        
    }

    async findByEmail(email: string): Promise<User> | null {
        const queryRunner = this.connection.createQueryRunner();

        const user = await queryRunner.manager.findOne(User, {
            where: {
                email: email,
            }
        });
        if (!user) {
            return null;
        }
        return user;
    }

    async setCurrentRefreshToken(refreshToken: string, userIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
            await queryRunner.manager.update(User, userIdx, { currentHashedRefreshToken: hashedRefreshToken });
            await queryRunner.commitTransaction();
        }catch(e){
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }

    async getUserIfRefreshTokenMatches(refreshToken: string, userIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        const user = await queryRunner.manager.findOne(User, {
                where: {
                    userIdx: userIdx,
                }
        });
        const ifRefreshTokenMatches = await bcrypt.compare(refreshToken, user.currentHashedRefreshToken);
        if (ifRefreshTokenMatches) {
            return user;
        } else {
            return null;
        }
    }

    async removeRefreshToken(userIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.update(User, userIdx, {
                currentHashedRefreshToken: null,
            });
            await queryRunner.commitTransaction();
        }catch(e){
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }
}
