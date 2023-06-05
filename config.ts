import * as dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.argv[2] || 3000,
  DB_URL: process.env.DB_URL || "mongodb://localhost:27017/test",
};

export default config;
