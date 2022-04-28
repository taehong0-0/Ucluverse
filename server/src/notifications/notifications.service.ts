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
        const queryrunner = this.connection.createQueryRunner();
        const notifications = await queryrunner.manager.createQueryBuilder(Notification, 'notification')
        .leftJoinAndMapOne("notification.club", Club, "club", "notification.clubIdx = club.clubIdx")
        .where("notification.userIdx = :userIdx", {userIdx})
        .getMany();
        return new NotificationResDto(notifications);
    }

    async getNotification(notificationIdx: number){
        const queryrunner = this.connection.createQueryRunner();
        const notification = await queryrunner.manager.createQueryBuilder(Notification, 'notification')
        .leftJoinAndMapOne("notification.club", Club, "club", "notification.clubIdx = club.clubIdx")
        .where("notification.notificationIdx = :notificationIdx", {notificationIdx})
        .getOne();
        notification.isRead = true;
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            await queryrunner.manager.save(notification);
            await queryrunner.commitTransaction();
            return new NotificationResDto(notification);
        }catch(e){
            console.log(e);
            await queryrunner.rollbackTransaction();
            return new BaseFailResDto('알림 생성에 실패했습니다.');
        }finally{
            await queryrunner.release();
        }
    }

    async createNotification(createNotificationDto: CreateNotificationDto){
        const queryrunner = this.connection.createQueryRunner();
        const {userIdx, title, content, clubIdx} = createNotificationDto;
        const notification = new Notification();
        notification.user = await queryrunner.manager.findOne(User, {
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
        await queryrunner.connect();
        await queryrunner.startTransaction();
        try{
            await queryrunner.manager.save(notification);
            await queryrunner.commitTransaction();
            return new BaseSuccessResDto();
        }catch(e){
            console.log(e);
            await queryrunner.rollbackTransaction();
            return new BaseFailResDto('알림 생성에 실패했습니다.');
        }finally{
            await queryrunner.release();
        }
    }
}
