import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtRefreshStrategy } from './jwt-refresh.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [
		ConfigModule,
		PassportModule,
		forwardRef(()=>UserModule),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get('JWT_ACCESS_TOKEN_SECRET'),
				signOptions: {
                	expiresIn: `${configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME',)}s`,
				}
			})
		})
	],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService]
})
export class AuthModule {}
