import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(
        private readonly notificationsService: NotificationsService,
    ){}

    @Get('/:userIdx')
    async getNotifications(@Param('userIdx') userIdx: number, @Res() res){
        res.send(await this.notificationsService.getNotifications(userIdx));
    }

    @Get('info/:notificationIdx')
    async getNotification(@Param('notificationIdx') notificationIdx: number, @Res() res){
        res.send(await this.notificationsService.getNotification(notificationIdx));
    }

    @Post()
    async createNotification(@Body() createNotificationDto: CreateNotificationDto, @Res() res){
        res.send(await this.notificationsService.createNotification(createNotificationDto));
    }
}
