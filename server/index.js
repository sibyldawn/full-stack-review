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
app.get('/api/profile', c.readUser);

app.get('/auth/callback',(req,res) => {
    const payload={
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    };

    function tradeCodeForAccessToken(){
        return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,payload);
    }

    function tradeAccessTokenForUserInfo(response){
        const accessToken = response.data.access_token;
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`);
    }

    function storeUserInfoInDatabase(response){
        const auth0Id = response.data.sub;
        const db = req.app.get('db')
        return db.read_user(auth0Id).then( users => {
            if(users.length){
                const user = users[0];
                req.session.user = user;
                res.redirect('/profile');

            }else{
                console.log(response.data)
                const createUserData = [
                    auth0Id,
                    response.data.email,
                    response.data.name,
                    response.data.picture
                ];
            return db.create_user(createUserData).then( newUser => {
                const user = newUser[0];
                req.session.user = user;
                res.redirect('/profile');
            })
            }
        })
    }
    tradeCodeForAccessToken()
        .then(tradeAccessTokenForUserInfo)
        .then(storeUserInfoInDatabase)
        .catch( error => {
            console.log('--------error',error);
            res.status(500).json( {message: 'Server Error'})
        })
});




const PORT = 4000;
app.listen(PORT, ()=> console.log('server now listening to port ' + PORT + ' 😃'));