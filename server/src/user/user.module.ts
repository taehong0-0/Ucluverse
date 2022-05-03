import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity'
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { Department } from 'src/departments/entities/department.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { diskStorage } from 'multer';
// import { awsS3config } from 'src/config/awsS3config';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Department,
    ]),
    forwardRef(()=>AuthModule),
    // MulterModule.registerAsync({
    //   useClass: awsS3config,
    // }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
