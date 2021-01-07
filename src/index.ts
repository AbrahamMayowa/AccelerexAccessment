import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes';
import { Character, Comment, Episode, Location } from './entity';
import { generalError } from './controller/errorControllers';
import {config} from 'dotenv';

config()

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Character, Location, Comment, Episode]
})
  .then(async (connection) => {
    const port = 3000;
    // create express app
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(router);
    app.use(generalError);

    // start express server
    app.listen(port, () => console.log(`Server ready on ${port}`));
  })
  .catch((error) => console.log(error));
