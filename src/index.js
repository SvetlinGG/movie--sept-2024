import express  from 'express';
import handlebarsInit from './config/handlebarsinit.js';

import routes from './routes.js';
import expressInit from './config/expressInit.js';
import mongooseInit  from './config/mongooseInit.js';

const app = express();

handlebarsInit(app);
expressInit(app);
mongooseInit();

app.use(routes);


app.listen( 1000, () =>  console.log('Server listening on http://localhost:1000'));