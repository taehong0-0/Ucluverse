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
import { ConfigService } from '@nestjs/config';
import { IsSignedUpResDto } from './dto/isSignedUp-res.dto';

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

            return new LoginResponseDto(2, '회원가입을 완료했습니다.', email, user);
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

    async update(userIdx: number, updateUserDto: UpdateUserDto) {
        const queryRunner = this.connection.createQueryRunner();
        const { department, profilePhotoPath, ...updateUserInfos } = updateUserDto;
        
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.update(User, userIdx, updateUserInfos);
            if (department) {
                const exDepartment = await queryRunner.manager.findOne(Department, {
                    where: {
                        name: department,
                    }
                });
                await queryRunner.manager.update(User, userIdx, {
                    departmentIdx: exDepartment.departmentIdx
                });
            }
            if (profilePhotoPath || profilePhotoPath === null) {
                const exProfilePhoto = await queryRunner.manager.findOne(ProfilePhoto, {
                    where: {
                        userIdx: userIdx
                    }
                });
                if(exProfilePhoto) {
                    if (profilePhotoPath === null) {
                        await queryRunner.manager.delete(ProfilePhoto, {
                            userIdx: userIdx,
                        });
                    } else {
                        await queryRunner.manager.update(ProfilePhoto, { userIdx: userIdx }, { path: profilePhotoPath });
                    }
                } else {
                    if (profilePhotoPath !== null) {
                        const newProfilePhoto = new ProfilePhoto();
                        newProfilePhoto.path = profilePhotoPath;
                        newProfilePhoto.userIdx = userIdx;
                        await queryRunner.manager.save(newProfilePhoto);
                    }
                }            
            }
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('사용자 정보 수정을 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
        
    }

    async findUser(userIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const user = await queryRunner.manager.createQueryBuilder(User, 'user')
            .leftJoin('user.profilePhoto', 'profilePhoto')
            .select(['user', 'profilePhoto.path'])
            .where('user.userIdx=:userIdx', { userIdx })
            .getOne();
            return new UserResDto(user); 
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async findDuplicateNickname(nickname: string){
        const queryRunner = this.connection.createQueryRunner();

        try {
            const user = await queryRunner.manager.findOne(User, {
                where:{
                    nickname: nickname,
                }
            })
            if(!user){
                return false;
            }
            return true;
        } catch(error) {
            console.log(error)
        } finally {
            await queryRunner.release();
        }
    }

    async findByEmail(email: string): Promise<User> | null {
        const queryRunner = this.connection.createQueryRunner();
        
        try {
            const user = await queryRunner.manager.findOne(User, {
                where: {
                    email: email,
                }
            });
            if (!user) {
                return null;
            }
            return user;
        } catch(error) {
            console.log(error);
        } finally {
            await queryRunner.release();
        }
    }

    async setCurrentRefreshToken(refreshToken: string, userIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        try {
            const user = await queryRunner.manager.findOne(User, {
                where: {
                    userIdx,
                }
            });
            user.currentHashedRefreshToken = hashedRefreshToken;
            await queryRunner.manager.save(user);
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

        try{
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
        } catch(error) {
            console.log(error);
        } finally{
            await queryRunner.release();
        }
    }

    async removeRefreshToken(userIdx: number) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const user = await queryRunner.manager.findOne(User, {
                where:{
                    userIdx,
                }
            });
            user.currentHashedRefreshToken = null;
            await queryRunner.manager.save(user);
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
        try {
            const userClub = await queryRunner.manager.findOne(UserClub, {
                where: {
                    userIdx: userIdx,
                    clubIdx: clubIdx,
                }
            });
            return userClub;
        } catch (e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
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
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
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
        const {userIdx, clubIdx} = changeUserClubStatus;
        const userClub = await this.getUserClub(userIdx, clubIdx);
        userClub.status = status;
        const queryRunner = this.connection.createQueryRunner();
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
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
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

    async checkIsSignedUp(userIdx: number, clubIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const isSignedUp = await queryRunner.manager.findOne(UserClub, {
                where: {
                    userIdx: userIdx,
                    clubIdx: clubIdx,
                    status: 'accepted',
                }
            });
            if(isSignedUp){
                return new IsSignedUpResDto(true);
            } else {
                return new IsSignedUpResDto(false);
            }
        } catch (e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }
}