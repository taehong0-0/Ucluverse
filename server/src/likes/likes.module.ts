import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entity/likes.entity';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
          Like
        ]),
      ],
    controllers: [LikesController],
    providers: [LikesService],
})
export class LikesModule {}
