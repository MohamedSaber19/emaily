const express = require('express'); //importing express
const mongoose = require('mongoose'); //importing mongoose library to deal with mongoDB
const passport = require('passport');
const keys = require('./config/keys'); //importing config keys
const cookieSession = require('cookie-session'); //importing cookieSession module
require('./models/User'); //importing model User of users collection
require('./services/passport'); //importing passport to handle auth process

mongoose.connect(keys.mongoURI, { //connecting to our mongoDB with mongoose
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express(); //run an express server

app.use( // using cookieSession module and passing some options
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // handle session cookie

require('./routes/authRoutes')(app); //this format is a valid js as we importing routes and then bootstrap our express app as a callback function

const PORT = process.env.PORT || 5000; //get the port from our env variables if exist otherwise go to port 5000

app.listen(PORT); //listen to that port