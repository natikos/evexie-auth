import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MODELS } from './models';

@Module({
  imports: [SequelizeModule.forFeature(MODELS)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
