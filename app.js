const express = require('express');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
    res.render('index', { title: 'Mon title' });
});

app.post('/party', function(req, res) {
    console.log(req.body);
    res.send('Bien rempli !');
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));