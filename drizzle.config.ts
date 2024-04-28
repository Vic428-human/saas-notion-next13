import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();




if (!process.env.DATABASE_URL || "" ) {
    console.log('🔴 Cannot find database url');
}



export default {
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  driver: 'pg',
  dbCredentials: {
    uri: process.env.DATABASE_URL || "",
  }
} satisfies Config;