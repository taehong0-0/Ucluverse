import { Injectable } from '@nestjs/common';
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
        const notifications = await queryrunner.manager.find(Notification, {
            where:{
                userIdx,
            }
        });
        return new NotificationResDto(notifications);
    }

    async createNotification(createNotificationDto: CreateNotificationDto){
        const queryrunner = this.connection.createQueryRunner();
        const {userIdx, title, content, from} = createNotificationDto;
        const notification = new Notification();
        notification.user = await queryrunner.manager.findOne(User, {
            where:{
                userIdx,
            }
        });
        notification.from = from;
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
        }catch(e){
            console.log(e);
            await queryrunner.rollbackTransaction();
        }finally{
            await queryrunner.release();
        }
    }
}
