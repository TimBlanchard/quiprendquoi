const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('Salut tim');
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));