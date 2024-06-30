import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get databaseConnectionUrl(): string {
    return this.configService.get('DATABASE_URL');
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
