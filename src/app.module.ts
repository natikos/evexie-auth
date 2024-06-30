import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app-config.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, AuthModule],
})
export class AppModule {}
