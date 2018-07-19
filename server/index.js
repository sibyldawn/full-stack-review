const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const c = require('./controller');

require('dotenv').config();
massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db',db)}).catch(error => {
        console.log('Error',error)
    });


const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))

// app.get('/api/words', c.readWords);
// app.post('/api/words', c.createWord);
// app.get('/api/profile', c.readUser);





const PORT = 4000;
app.listen(PORT, ()=> console.log('server now listening to port ' + PORT + ' 😃'));