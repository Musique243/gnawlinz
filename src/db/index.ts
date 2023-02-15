//import path from 'path';
//import passport from 'passport';
//import GoogleStrategy from 'passport-google-oauth20';
//import { Sequelize } from 'sequelize-typescript'; //UNINSTALL ME?
import 'dotenv/config';
import 'postgresql'; // ???
//import schemas
import { Sequelize } from 'sequelize';

const { DB_USER, DATABASE_URL, DB, DBPW } = process.env;
//uncomment second sequelize call for using external db
export const db = new Sequelize(DB!, DB_USER!, DBPW!, {
  host: DATABASE_URL,
  dialect: 'mysql',
  protocol: 'mysql',
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false
  //   }
  // }
});

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

