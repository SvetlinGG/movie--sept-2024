const express = require('express')
const handlebars = require('express-handlebars');



const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))


app.get('/', (req, res) => {
    res.send('Just Works!!');
})

app.listen( 1000, () =>  console.log('Server listening on http://localhost:1000'));