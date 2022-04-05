import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posting } from './entities/posting.entity';
import { PostingsController } from './postings.controller';
import { PostingsService } from './postings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Posting,
    ]),
  ],
  controllers: [PostingsController],
  providers: [PostingsService]
})
export class PostingsModule {}
