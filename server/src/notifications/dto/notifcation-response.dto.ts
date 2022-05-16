import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";

export class NotificationResDto extends BaseSuccessResDto{
    constructor(notifications: any){
        super();
        this.res.notifications = notifications;
    }
    @ApiProperty({ description: '알림 정보' })
    notifications: any;
}