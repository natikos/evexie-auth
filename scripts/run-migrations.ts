import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schemas from '~entities';
import { config } from 'dotenv';

config();

async function runMigrations(): Promise<void> {
  const connection = postgres(process.env.DATABASE_URL, { max: 1 });
  const db = drizzle(connection, { schema: { ...schemas } });

  await migrate(db, {
    migrationsFolder: './drizzle',
    migrationsTable: 'migrations',
  });
  await connection.end();
}

runMigrations();
