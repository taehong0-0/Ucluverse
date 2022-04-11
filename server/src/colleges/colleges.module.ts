import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeController } from './colleges.controller';
import { CollegeService } from './colleges.service';
import { College } from './entities/college.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      College,
    ])
  ],
  controllers: [CollegeController],
  providers: [CollegeService],
  exports: [CollegeService],
})
export class CollegesModule {}
