import * as dotenv from 'dotenv';

console.log(dotenv.config());

export const DATABASE_URL: string = process.env.DB_HOST|| ""

