const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Sending response...');
    res.send('Hello World');
})

app.listen(8080);