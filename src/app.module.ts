import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app-config.module';
import { AppConfigService } from './config/app-config.service';

@Module({
  imports: [
    AppConfigModule,
    SequelizeModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useClass: AppConfigService,
    }),
    AuthModule,
  ],
})
export class AppModule {}
