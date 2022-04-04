import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entity/likes.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
          Like
        ]),
      ],
})
export class LikesModule {}
