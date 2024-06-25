import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { resolve } from 'node:path';

@Injectable()
export class AppConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'postgres',
      database: this.configService.get('DB_NAME'),
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      password: this.configService.get('DB_PASSWORD'),
      username: this.configService.get('DB_USERNAME'),
      synchronize: true,
      autoLoadModels: true,
      models: [resolve(__dirname, '..', '**/*.model.js')],
      quoteIdentifiers: true,
      typeValidation: true,
      define: {
        underscored: true,
        timestamps: true,
      },
    };
  }

  createRmqOptions(): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('BROKER_URL')],
        queue: this.configService.get('BROKER_QUEUE'),
        maxConnectionAttempts: 3,
      },
    };
  }
}
