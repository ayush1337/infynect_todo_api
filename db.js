import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();
//change the password to access the local mySql database;
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ayush',
});
export default db;
