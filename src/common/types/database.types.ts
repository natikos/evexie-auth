import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schemas from '~entities';

export type Drizzle = PostgresJsDatabase<typeof schemas>;
