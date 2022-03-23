import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validationSchema } from './config/validationSchema';
import {TypeOrmModule} from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      envFilePath: [`${__dirname}/../env/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DATABASE_HOST'),
        port: config.get('DATABASE_PORT'),
        username: config.get('DATABASE_USERNAME'),
        password: config.get('DATABASE_PASSWORD'),
        database: config.get('DATABASE_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: Boolean(config.get('DATABASE_SYNCHRONIZE')),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
