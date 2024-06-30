import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as postgres from 'postgres';
import { AppConfigService } from 'src/config/app-config.service';
import { DRIZZLE } from '~const';
import * as schemas from './schema';

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      useFactory: (configService: AppConfigService) => {
        const client = postgres(configService.databaseConnectionUrl);
        return drizzle(client, { schema: { ...schemas } });
      },
      inject: [AppConfigService],
    },
  ],
  exports: [DRIZZLE],
})
export class DatabaseModule {}
