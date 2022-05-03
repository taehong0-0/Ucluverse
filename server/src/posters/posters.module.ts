import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
// import { awsS3config } from 'src/config/awsS3config';
import { PostersController } from './posters.controller';
import { PostersService } from './posters.service';

@Module({
  // imports:[
  //   MulterModule.registerAsync({
  //     useClass: awsS3config,
  //   }),
  // ],
  controllers: [PostersController],
  providers: [PostersService]
})
export class PostersModule {}
