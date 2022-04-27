import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
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
}
