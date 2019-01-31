const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Ételfutár');
});

app.listen(3001, () => {
    console.log('Listening on port 3001...');
});