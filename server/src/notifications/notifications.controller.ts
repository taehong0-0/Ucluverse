import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
@ApiTags('알림 API')
export class NotificationsController {
    constructor(
        private readonly notificationsService: NotificationsService,
    ){}

    @Get('user/:userIdx')
    @ApiOperation({
        summary: '유저 인덱스에 대한 모든 알림 불러오기 API',
    })
    async getNotifications(@Param('userIdx') userIdx: number, @Res() res){
        res.send(await this.notificationsService.getNotifications(userIdx));
    }

    @Get('readAll/:userIdx')
    @ApiOperation({
        summary: '유저 인덱스에 대한 모든 알림 읽음 처리 API',
    })
    async readAll(@Param('userIdx') userIdx: number, @Res() res){
        res.send(await this.notificationsService.readAll(userIdx));
    }

    @Get(':notificationIdx')
    @ApiOperation({
        summary: '알림 인덱스에 대한 알림 정보 불러오기 API',
    })
    async getNotification(@Param('notificationIdx') notificationIdx: number, @Res() res){
        res.send(await this.notificationsService.getNotification(notificationIdx));
    }

    @Post()
    @ApiOperation({
        summary: '동아리에서 알림 생성 API',
    })
    async createNotification(@Body() createNotificationDto: CreateNotificationDto, @Res() res){
        res.send(await this.notificationsService.createNotification(createNotificationDto));
    }
}
