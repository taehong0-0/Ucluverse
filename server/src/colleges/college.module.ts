import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeController } from './college.controller';
import { CollegeService } from './college.service';
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
