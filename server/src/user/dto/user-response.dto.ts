import { BaseSuccessResDto } from "src/commons/response.dto";
import { ProfilePhoto } from "../entities/profilePhoto.entity";

export class UserResDto extends BaseSuccessResDto{
    constructor(user: any){
        super()
        this.res.user = user;
    }
}