const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
    res.render('index', { title: 'Mon title' });
});

app.post('/party', function(req, res) {
    axios
        .post(`${process.env.API_URL}/party`, req.body)
        .then(({ data }) => res.redirect(`/party/${data._id}`))
        .catch((err) => res.send(err));
});

app.get('/party/:id', (req, res) => {
    console.log(req.params.id);
    axios
        .get(`${process.env.API_URL}/party/${req.params.id}`)
        .then(({ data }) =>
            res.render('party', {
                party: data,
                title: data.name
            }),
        )
        .catch((err) => console.log(err));
});

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));