import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginResponseDto } from 'src/auth/dto/login-response.dto';
import { Connection, QueryRunner } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserClub } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Department } from 'src/departments/entities/department.entity';
import { ProfilePhoto } from './entities/profilePhoto.entity';
import { UserResDto } from './dto/user-response.dto';
import { SignupClubDto } from './dto/signup-club.dto';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { Club } from 'src/clubs/entities/club.entity';
import { ChangeUserClubStatusDto } from './dto/change-userClubStatus.dto';
import { StarClubDto } from './dto/star-club.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

// 트랜잭션/에러처리 필요.
@Injectable()
export class UserService {
    constructor (
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
        private connection: Connection,
        private configService: ConfigService,
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        const queryRunner = this.connection.createQueryRunner();
        const { name, email, department, studentId, phoneNumber, nickname, profilePhotoPath } = createUserDto;
        const user = new User();
        user.name = name;
        user.email = email;
        user.studentId = studentId;
        user.phoneNumber = phoneNumber;
        user.nickname = nickname;

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const dpt = await queryRunner.manager.findOne(Department, {
                where:{
                    name: department,
                }
            })
            if(!dpt){
                console.log('해당학과가 존재하지 않습니다.');
            }
            user.department = dpt;
            user.departmentIdx = dpt.departmentIdx;
            await queryRunner.manager.save(user);
            if (profilePhotoPath && profilePhotoPath !== null) {
                const profilePhoto = new ProfilePhoto();
                profilePhoto.path = profilePhotoPath;
                profilePhoto.userIdx = user.userIdx;
                await queryRunner.manager.save(profilePhoto);
            }
            await queryRunner.commitTransaction();

            return new LoginResponseDto(2, '회원가입을 완료했습니다.', user.userIdx, user.email);;
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
            return {
                msg: '회원가입을 실패했습니다.',
                userIdx: user.userIdx,
                email: null,
            };
        }finally{
            await queryRunner.release();
        }
    }

    async update(userIdx: number, updateUserDto: UpdateUserDto, photo: any) {
        const queryRunner = this.connection.createQueryRunner();
        const exDepartment = await queryRunner.manager.findOne(Department, {
            where: {
                name: updateUserDto.department,
            }
        });
        const s3 = new S3;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(User, userIdx, {
                name: updateUserDto.name,
                departmentIdx: exDepartment.departmentIdx,
                studentId: updateUserDto.studentId,
                phoneNumber: updateUserDto.phoneNumber,
                nickname: updateUserDto.nickname,
            });
            if (Boolean(updateUserDto.isProfilePhotoChanged)) {
                //updateDto의 isProfilePhotoChanged에는 1 or 0을 넣으면 된다.
                // 프로필 사진을 바꿨을 때, 기존에 프로필 사진이 있으면 업데이트.
                // 기존 프로필 사진이 없으면 생성.
                // 프로필 사진을 내렸을 때, 기존 프로필 사진을 삭제.
                const exProfilePhoto = await queryRunner.manager.findOne(ProfilePhoto, {
                    where: {
                        userIdx: userIdx,
                    }
                });
                if (photo) {
                    if (exProfilePhoto) {
                        await queryRunner.manager.update(ProfilePhoto, exProfilePhoto.profilePhotoIdx, {
                            path: photo.key
                        });
                        s3.deleteObject({
                            Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
                            Key: exProfilePhoto.path,
                        }, (err) => {
                            if(err) { throw err; } 
                        });
                    } else {
                        const newProfilePhoto = new ProfilePhoto();
                        newProfilePhoto.path = photo.key;
                        newProfilePhoto.userIdx = userIdx;
                        await queryRunner.manager.save(newProfilePhoto);
                    }
                } else {
                    if (exProfilePhoto) {
                        await queryRunner.manager.delete(ProfilePhoto, exProfilePhoto.profilePhotoIdx);
                        s3.deleteObject({
                            Bucket: this.configService.get('AWS_S3_BUCKET_NAME'),
                            Key: exProfilePhoto.path,
                        }, (err) => {
                            if(err) { throw err; } 
                        });
                    }
                }  
            } 
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('사용자 정보 수정을 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
        
    }

    async findUser(userIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        const user = await queryRunner.manager.findOne(User, {
            where: {
                userIdx: userIdx,
            },
            relations: [
                'profilePhoto'
            ]
        });
        return new UserResDto(user); 
    }


    async saveProfilePhoto(userIdx: number, photo: any) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const profilePhoto = new ProfilePhoto();
            profilePhoto.path = photo.key;
            profilePhoto.userIdx = userIdx;
            await queryRunner.manager.save(profilePhoto);
            await queryRunner.commitTransaction();

            return new BaseSuccessResDto();
        } catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('프로필 사진 저장을 실패했습니다.');
        } finally {
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
        try {
            const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
            await queryRunner.manager.update(User, userIdx, { currentHashedRefreshToken: hashedRefreshToken });
            await queryRunner.commitTransaction();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
        } finally {
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
        const ifRefreshTokenMatches = await bcrypt.compare(
            refreshToken, user.currentHashedRefreshToken
            );
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

    async signupClub(signupClubDto: SignupClubDto){
        const {userIdx, clubIdx} = signupClubDto;
        const userClub = await this.getUserClub(userIdx, clubIdx);
        if(userClub){
            return await this.setUserClubStatusWaiting(userClub);
        }else{
            return await this.applyClub(userIdx, clubIdx);
        }
    }

    async getUserClub(userIdx: number, clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        const userClub = await queryRunner.manager.findOne(UserClub, {
                where: {
                    userIdx: userIdx,
                    clubIdx: clubIdx,
                }
        });
        return userClub;
    }

    async setUserClubStatusWaiting(userClub: UserClub){
        const queryRunner = this.connection.createQueryRunner();
        userClub.status = 'waiting';
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(userClub);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }

    async applyClub(userIdx: number, clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        const userClub = new UserClub();
        const club = await queryRunner.manager.findOne(Club, {
            where: {
                clubIdx: clubIdx,
            }
        });
        const user = await queryRunner.manager.findOne(User, {
            where: {
                userIdx: userIdx,
            }
        })
        userClub.club = club;
        userClub.user = user;
        userClub.role = 'applicant';
        userClub.status = 'waiting';
        userClub.star = false;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(userClub);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }

    async changeUserClubStatus(changeUserClubStatus: ChangeUserClubStatusDto, status: string){
        const queryRunner = this.connection.createQueryRunner();
        const {userIdx, clubIdx} = changeUserClubStatus;
        const userClub = await this.getUserClub(userIdx, clubIdx);
        userClub.status = status;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(userClub);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }

    async starClub(starClubDto: StarClubDto){
        const {userIdx, clubIdx} = starClubDto;
        const userClub = await this.getUserClub(userIdx, clubIdx);
        if(userClub){
            return await this.toggleStar(userClub);
        }else{
            return await this.starNewClub(userIdx, clubIdx);
        }
    }

    async toggleStar(userClub: UserClub){
        const queryRunner = this.connection.createQueryRunner();
        userClub.star ? userClub.star = false : userClub.star = true;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(userClub);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }

    async starNewClub(userIdx: number, clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        const userClub = new UserClub();
        const club = await queryRunner.manager.findOne(Club, {
            where: {
                clubIdx: clubIdx,
            }
        });
        const user = await queryRunner.manager.findOne(User, {
            where: {
                userIdx: userIdx,
            }
        })
        userClub.club = club;
        userClub.user = user;
        userClub.role = null;
        userClub.status = null;
        userClub.star = true;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            await queryRunner.manager.save(userClub);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }
}
