import express  from 'express';
import handlebarsInit from './config/handlebarsInit.js';

import routes from './routes.js';
import expressInit from './config/expressInit.js';

const app = express();

handlebarsInit(app);
expressInit(app);

app.use(routes);


app.listen( 1000, () =>  console.log('Server listening on http://localhost:1000'));