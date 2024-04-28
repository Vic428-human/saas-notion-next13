import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as dotenv from 'dotenv'; 

import * as schema from '../../../migrations/schema'; 

import { migrate } from 'drizzle-orm/postgres-js/migrator';

// 引用 .env 所在位置的路徑，env可能不只一個，可能是多個
dotenv.config({ path: '.env' }); 

//====例外處理=====//
if (!process.env.DATABASE_URL) {
  console.log('🔴 no database URL');
}

//====連線=====//
const client = postgres(process.env.DATABASE_URL as string, { max: 1 }); // postgres最大連線次數1
const db = drizzle(client, { schema }); // Connection use Drizzle together with Postgres.js
();


export default db; // 之後可用db.selectselect 獲取資料