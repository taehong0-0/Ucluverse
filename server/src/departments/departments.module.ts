import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegesModule } from 'src/colleges/colleges.module';
import { CollegeService } from 'src/colleges/colleges.service';
import { College } from 'src/colleges/entities/college.entity';
import { User } from 'src/user/entities/user.entity';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { Department } from './entities/department.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Department,
      College,
    ]),
    CollegesModule,
  ],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],

})
export class DepartmentsModule {}
