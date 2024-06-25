import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app-config.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(AppConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    configService.createRmqOptions(),
  );
  await app.listen();
}

bootstrap();
