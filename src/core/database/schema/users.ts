import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { DEFAULT_FIELD_MAX_LENGTH } from '~const';
import { timestampFields } from './common';

export const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: DEFAULT_FIELD_MAX_LENGTH }),
  lastName: varchar('last_name', { length: DEFAULT_FIELD_MAX_LENGTH }),
  email: varchar('email', { length: DEFAULT_FIELD_MAX_LENGTH }).unique(),
  ...timestampFields,
});
