import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { awsS3config } from 'src/config/awsS3config';
import { Posting } from './entities/posting.entity';
import { PostingsController } from './postings.controller';
import { PostingsService } from './postings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Posting,
    ]),
    MulterModule.registerAsync({
      useClass: awsS3config,
    }),
  ],
  controllers: [PostingsController],
  providers: [PostingsService]
})
export class PostingsModule {}
