import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { DEFAULT_FIELD_MAX_LENGTH } from '~const';
import { timestampFields } from './common';
import { Users } from './users';

export const Auth = pgTable('auth', {
  id: integer('id')
    .primaryKey()
    .references(() => Users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  password: varchar('password', { length: DEFAULT_FIELD_MAX_LENGTH }),
  refreshToken: varchar('refresh_token', { length: DEFAULT_FIELD_MAX_LENGTH }),
  ...timestampFields,
});
