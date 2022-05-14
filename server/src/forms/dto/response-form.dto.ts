import { BaseSuccessResDto } from "src/commons/response.dto";
import { Form } from "../entity/form.entity";

export class FormResDto extends BaseSuccessResDto {
    constructor(form: Form) {
        super();
        this.res.form = form;
    }
    form: Form;
}