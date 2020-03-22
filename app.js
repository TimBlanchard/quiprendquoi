const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('pwa'));


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
    axios
        .get(`${process.env.API_URL}/party/${req.params.id}`)
        .then(({ data }) =>
            res.render('party', {
                party: data,
                title: data.name,
                url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
            }),
        )
        .catch((err) => console.log(err));
});

// Ajout d'un nouvel item
app.post('/party/:id/items', function(req, res) {
    axios
        .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
        .then(() => res.redirect(`/party/${req.params.id}`))
        .catch((err) => res.send(err));
});


//Suppression d'un item
app.post('/party/:party_id/items/:item_id/delete', (req, res) => {
    axios
        .delete(`${process.env.API_URL}/party/${req.params.party_id}/items/${req.params.item_id}`, req.body)
        .then(() => res.redirect(`/party/${req.params.party_id}`))
        .catch((err) => res.send(err));
});


app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));