const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');
const expressSession = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');

const user = require('./models/users');
const auth = require('./routes/auth');


mongoose.connect('mongodb://localhost:27017/ReverseCook', {useNewUrlParser: true});
ejs.delimiter = '?';

const port = process.env.PORT || 8080;
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(expressSession({
    secret: "hahahahhaww",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
app.use((req, res, next)=> {
    res.locals.currentUser = req.user;
    next();
});


app.get('/', (req, res)=> { res.render('index') });
app.use(auth);
app.get('*', (req, res)=> { res.send('Theres a mistake in the url')} );


app.listen(port, () => {
    console.log(`Server us listening on port: ${port}`);
});