import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes';
import { Character, Comment, Episode, Location } from './entity';
import { generalError } from './controller/errorControllers';
import { config } from 'dotenv';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

config();

createConnection({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Character, Location, Comment, Episode]
})
  .then(async () => {
    const PORT = process.env.PORT || 3000;
    // create express app
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(router);

    app.use(generalError);

    // start express server
    app.listen(PORT, () => console.log(`Server ready on ${PORT}`));
  })
  .catch((error) => console.log(error));
