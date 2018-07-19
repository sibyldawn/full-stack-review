const express = require('express');
require('dotenv').config();
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const bodyParser = require('body-parser');
const c = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
}));

massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
}).catch(error => {
  console.log('Error connecting to massive', error);
});

app.get('/api/words', c.readWords);
app.post('/api/words', c.createWord);
app.get('/api/profile', c.readUser);

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT + ' 🚀👌🌭🚀');
});
