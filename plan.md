# Full stack review plan - word bank

## Front-end

    * Pages
        * Profile
            * Name
            * Picture
            * Email
        * Landing Page
        * List Words
    * Components
        * Header
        * Button
        * Navigation
        * Input
        * Footer
            * Copyright
            * Careers
    * Redux
        * store
        * reducer
            * initialState
                * user

            * reducer function
            * action creators
                * login
                * logout
            * action type names as constants

    * Routes
        * BrowserRouter
            * /
            * /profile
            * /words

## Back-end
    * Middleware
        * ensureLogIn
    * Routes
        * /api/words
            * GET
            * POST
    
        * /api/profile
            * GET
    * auth
        * auth0

    * Files
        * /server
            * index
            * controller

## Database
* DATABASE - Ivory
    * Tables
        * users
           * ~~id~~
           * ~~auth0-id~~
           * ~~name~~
           * ~~picture_url~~
           * ~~email~~
        * words
            * ~~id~~
            * ~~text~~

    * Files
        * /db
            * init.sql
            * get_words.sql
            * create_word.sql
            * create_profile.sql
            * read_profile.sql


## NPM Packages
    * axios
    * massive
    * body-parser
    * dotenv
    * express-session
    * redux
    * react-redux
    * react-router-dom
    * express


## Third Party

* Auth0
    * Application
    * Social Connection
* Github
* Heroku
* Redux DevTools
* React DevTools
* ~~Postman~~
* ~~SQL Tabs~~
* Chrome
    * DevTools
    * Network Tab

