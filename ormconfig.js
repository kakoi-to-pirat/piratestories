import { env } from 'process';

const username = env.POSTGRES_USER || "postgres";
const password = env.POSTGRES_PASSWORD || "postgres";

export default {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  username,
  password,
  "database": "postgres",
  "synchronize": false,
  "dropSchema": false,
  "logging": true,
  "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
  "migrations": ["migrations/**/*.ts"],
  "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src",
    "migrationsDir": "migrations",
    "subscribersDir": "subscriber"
  }
}
