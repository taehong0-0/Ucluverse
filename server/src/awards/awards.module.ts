import { Module } from '@nestjs/common';
import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';

@Module({
  controllers: [AwardsController],
  providers: [AwardsService]
})
export class AwardsModule {}
