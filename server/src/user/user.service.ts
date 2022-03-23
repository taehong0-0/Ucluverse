import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor (
        private connection: Connection
    ) {}

    async create(createUserDto: CreateUserDto) {
        
    }

    async findByEmail(email: string): Promise<User> | null {
        const user = User.findOne({
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
        await User.update(userIdx, { currentHashedRefreshToken: refreshToken });
    }

    async getUserIfRefreshTokenMatches(refreshToken: string, userIdx: number) {
        const user = await User.findOne({
            where: {
                userIdx: userIdx,
            }
        });
        const ifRefreshTokenMatches = refreshToken == user.currentHashedRefreshToken ? true : false;
        if (ifRefreshTokenMatches) {
            return user;
        } else {
            return null;
        }
    }

    async removeRefreshToken(userIdx: number) {
        return User.update(userIdx, {
            currentHashedRefreshToken: null,
        });
    }
}
