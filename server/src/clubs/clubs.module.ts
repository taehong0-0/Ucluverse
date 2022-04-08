import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';

@Module({
  imports: [TypeOrmModule.forFeature([

  ])],
  controllers: [ClubsController],
  providers: [ClubsService]
})
export class ClubsModule {}
