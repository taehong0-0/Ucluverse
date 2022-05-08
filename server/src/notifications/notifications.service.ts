import { Injectable } from '@nestjs/common';
import { Club } from 'src/clubs/entities/club.entity';
import { BaseFailResDto, BaseSuccessResDto } from 'src/commons/response.dto';
import { User } from 'src/user/entities/user.entity';
import { Connection } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationResDto } from './dto/notifcation-response.dto';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationsService {
    constructor(
        private connection: Connection,
    ){}

    async getNotifications(userIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        try {
            const notifications = await queryRunner.manager.createQueryBuilder(Notification, 'notification')
            .leftJoinAndMapOne("notification.club", Club, "club", "notification.clubIdx = club.clubIdx")
            .where("notification.userIdx = :userIdx", {userIdx})
            .getMany();
            return new NotificationResDto(notifications);
        } catch(e) {
            console.log(e);
        } finally {
            await queryRunner.release();
        }
    }

    async readAll(userIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.createQueryBuilder()
                .update(Notification)
                .set({
                    isRead: true,
                })
                .where("userIdx = :userIdx", {userIdx})
                .execute();
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('알림 모두 읽기에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async getNotification(notificationIdx: number){
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const notification = await queryRunner.manager.createQueryBuilder(Notification, 'notification')
            .leftJoinAndMapOne("notification.club",Club, "club", "notification.clubIdx = club.clubIdx")
            .where("notification.notificationIdx = :notificationIdx", {notificationIdx})
            .getOne();
        notification.isRead = true;
            await queryRunner.manager.save(notification);
            await queryRunner.commitTransaction();
            return new NotificationResDto(notification);
        } catch(e) {
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('알림 생성에 실패했습니다.');
        } finally {
            await queryRunner.release();
        }
    }

    async createNotification(createNotificationDto: CreateNotificationDto){
        const {userIdx, title, content, clubIdx} = createNotificationDto;
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try{
            const notification = new Notification();
            notification.user = await queryRunner.manager.findOne(User, {
                where:{
                    userIdx,
                }
            });
            notification.clubIdx = clubIdx;
            title == "accept" ? (
                notification.title = "승인", 
                notification.content = "동아리 신청이 승인되었습니다.") : (
                    title == "reject" ? (
                        notification.title = "거절",
                        notification.content = "동아리 신청이 거절되었습니다."
                    ) : (
                        notification.title = title,
                        notification.content = content
                    )
                );
            await queryRunner.manager.save(notification);
            await queryRunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryRunner.rollbackTransaction();
            return new BaseFailResDto('알림 생성에 실패했습니다.');
        }finally{
            await queryRunner.release();
        }
    }
}
