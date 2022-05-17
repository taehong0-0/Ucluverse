import { ApiProperty } from "@nestjs/swagger";
import { BaseSuccessResDto } from "src/commons/response.dto";
import { Form } from "../entity/form.entity";

export class FormResDto extends BaseSuccessResDto {
    constructor(form: Form) {
        super();
        this.res.form = form;
    }
    @ApiProperty({
        description: '질문을 포함한 신청 양식',
        type: Form,
        example: {
			"clubIdx": 100,
			"notice": "반갑습니다.",
			"formIdx": 4,
			"questions": [
				{
					"content": "1111",
					"questionIdx": 13,
					"formIdx": 4
				},
				{
					"content": "2222",
					"questionIdx": 14,
					"formIdx": 4
				},
				{
					"content": "333",
					"questionIdx": 15,
					"formIdx": 4
				},
				{
					"content": "444",
					"questionIdx": 16,
					"formIdx": 4
				}
			]
		}
    })
    form: Form;
}