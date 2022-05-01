import { BaseSuccessResDto } from "src/commons/response.dto";

export class NotificationResDto extends BaseSuccessResDto{
    constructor(notifications: any){
        super();
        this.res.notifications = notifications;
    }
    notifications: any;
}