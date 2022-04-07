import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class Common{
    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedAt:Date;
}