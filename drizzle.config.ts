import { env } from '@/lib/env';
import type { Config } from 'drizzle-kit';

export default {
  schema: './lib/db/schema/*',
  out: './supabase/migrations',
  dialect: 'postgresql',
  schemaFilter: ['public'],
  dbCredentials: {
    url: env.POSTGRES_URL
  }
} satisfies Config;
