// dotenv
const config = require('dotenv').config();

// 
export const PORT = parseInt(config.parsed.PORT || '');

// database url
export const DATABASE_URL = config.parsed.DATABASE_URL;

// 30 days in seconds
export const MAX_SESSION_AGE= 30 * 24 * 60 * 60;
export const SESSION_SECRET = config.parsed.SESSION_SECRET || require('crypto').randomBytes(32).toString('base64').replace(/[^a-zA-Z0-9]+/g, '');