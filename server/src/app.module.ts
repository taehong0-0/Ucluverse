import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validationSchema } from './config/validationSchema';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CollegesModule } from './colleges/colleges.module';
import { DepartmentsModule } from './departments/departments.module';
import { ClubsModule } from './clubs/clubs.module';
import { PostingsModule } from './postings/postings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      envFilePath: [`${__dirname}/../env/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DATABASE_HOST'),
        port: config.get('DATABASE_PORT'),
        username: config.get('DATABASE_USERNAME'),
        password: config.get('DATABASE_PASSWORD'),
        database: config.get('DATABASE_DATABASE'),
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: Boolean(config.get('DATABASE_SYNCHRONIZE')),
        logging: true,
      }),
    }),
    UserModule,
    AuthModule,
    CollegesModule,
    DepartmentsModule,
    ClubsModule,
    PostingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
