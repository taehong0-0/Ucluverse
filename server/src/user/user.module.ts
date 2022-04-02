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
import { diskStorage } from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Department,
    ]),
    forwardRef(()=>AuthModule),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        storage: diskStorage({
          destination: (req, file, cb) => {
            const dest = `${configService.get('FILE_SAVE_PATH')}`;
            cb(null, dest);
          },
          filename: (req, file, cb) => {
            const timeStamp = Date.now();
            const fileName = timeStamp + file.originalname;
            return cb(null, `${fileName}`);
          }
        })
      })
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
