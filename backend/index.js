const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/nigga', (req, res) => {
    res.send('Hello nigga!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})