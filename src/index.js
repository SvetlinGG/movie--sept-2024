import express from 'express';



const app = express();


app.get('/', (req, res) => {
    res.send('Just Works');
})

app.listen( 1000, () =>  console.log('Server listening on http://localhost:1000'));