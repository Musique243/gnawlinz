//import path from 'path';
//import passport from 'passport';
//import GoogleStrategy from 'passport-google-oauth20';
//import { Sequelize } from 'sequelize-typescript'; //UNINSTALL ME?
import 'dotenv/config';
//import schemas
import { Sequelize } from 'sequelize'

const { DB_USER, DATABASE_URL, DB } = process.env;
//uncomment second sequelize call for using external db
export const db = new Sequelize(DB!, DB_USER!, '', {
  host: DATABASE_URL,
  dialect: 'postgres',
  protocol: 'postgres',
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

