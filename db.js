import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();
//change the password to access the local mySql database;
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'ayush',
});
export default db;
