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
import { LikesModule } from './likes/likes.module';
import { CommentsModule } from './comments/comments.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { ClubsModule } from './clubs/clubs.module';
import { PostingsModule } from './postings/postings.module';
import { PostersModule } from './posters/posters.module';
import { HealthCheckController } from './health-check/health-check.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { NotificationsModule } from './notifications/notifications.module';
import { AwardsModule } from './awards/awards.module';

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
        // synchronize: false,
        logging: true,
      }),
    }),
    TerminusModule,
    HttpModule,
    UserModule,
    AuthModule,
    CollegesModule,
    DepartmentsModule,
    LikesModule,
    CommentsModule,
    QuestionsModule,
    AnswersModule,
    ClubsModule,
    PostingsModule,
    PostersModule,
    NotificationsModule,
    AwardsModule,
  ],
  controllers: [AppController, HealthCheckController],
  providers: [AppService, HealthCheckController],
})
export class AppModule {}
