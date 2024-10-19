import express  from 'express';
import handlebarsInit from './config/handlebarsInit.js';

import routes from './routes.js';

const app = express();
handlebarsInit(app);



app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(routes);


app.listen( 1000, () =>  console.log('Server listening on http://localhost:1000'));