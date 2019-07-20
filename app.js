const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const fetch = require('node-fetch');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const localStrategy = require('passport-local');
const expressSession = require('cookie-session');
const passportLocalMongoose = require('passport-local-mongoose');

const user = require('./models/users');
const comments = require('./models/comments');


const auth = require('./routes/auth');
const recipeRoutes = require('./routes/recipe');
const commentsRoutes = require('./routes/comments');
const userRoutes = require('./routes/user');
const password = 'hobo';
const herokuuser = 'heroku'
const herokupass = 'hero'

//mongodb+srv://Oyebola:<password>@hobo-r0nfl.gcp.mongodb.net/test?retryWrites=true&w=majority
//mongoose.connect('mongodb://localhost:27017/ReverseCook', {useNewUrlParser: true});
//mongoose.connect(`mongodb+srv://Oyebola:${password}@hobo-r0nfl.gcp.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
mongoose.connect(`mongodb+srv://${herokuuser}:${herokupass}@hobo-r0nfl.gcp.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
ejs.delimiter = '?';

const port = process.env.PORT || 8080;
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
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
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});


app.get('/', (req, res)=> { res.render('index') });
app.use(auth);
app.use('/recipe', recipeRoutes);
app.use('/recipe/:rid/comments', commentsRoutes);
app.use('/users', userRoutes);
app.get('*', (req, res)=> { res.send('Theres a mistake in the url')} );


app.listen(port, () => {
    console.log(`Server us listening on port: ${port}`);
});