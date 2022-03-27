import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginResponseDto } from 'src/auth/dto/login-response.dto';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

// 트랜잭션/에러처리 필요.
@Injectable()
export class UserService {
    constructor (
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
        private connection: Connection
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        const queryRunner = this.connection.createQueryRunner();
        const { name, email, studentId, phoneNumber, nickname} = createUserDto;
        const user = new User();
        user.name = name;
        user.email = email;
        user.studentId = studentId;
        user.phoneNumber = phoneNumber;
        user.nickname = nickname;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(user);
            await queryRunner.commitTransaction();
            const userIdx = (await this.findByEmail(email)).userIdx;
            const {accessToken, refreshToken } = await this.authService.getTokens(userIdx);
            const result = new LoginResponseDto(2, '사용자가 DB에 존재함.(등록된 사용자임.)', user.userIdx)
            return {accessToken, refreshToken,result}
        }catch(e){
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }

    async findDuplicateNickname(nickname: string){
        const queryRunner = this.connection.createQueryRunner();

        const user = await queryRunner.manager.findOne(User, {
            where:{
                nickname: nickname,
            }
        })
        if(!user){
            return false;
        }
        return true;
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
