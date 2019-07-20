const express = require('express');
const router = express.Router({mergeParams: true});
const passport = require('passport');
const user = require('../models/users');


//=====================================
// REGISTER ROUTES
//=====================================


/***  Route to render Register form ***/
router.get('/register', (req, res)=> {
    res.render('register');
});


/*** Route to register a new user ***/
router.post('/register', (req, res)=> {
    const {name, username, password} = req.body;
    const newuser = new user({username});
    user.register(newuser, password, (err, retuser)=> {
        if(err){
            req.flash('error', `${err.message}`);
            return res.redirect('back');
        } else {
            retuser.name = name;
            retuser.save()
            passport.authenticate('local')(req, res, ()=> {
                req.flash('success', `Welcome, ${name}`)
                res.redirect('/');
            });
        }
    });
});



//=====================================
// LOGIN ROUTES
//=====================================


/***  Route to render Login form ***/
router.get('/login', (req, res)=> {
    res.render('login')
});


/***  Route to Login a user ***/
//TODO: Error checking proper
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    successFlash: `Welcome back fam!`,
    failureRedirect: '/login',
    failureFlash: 'Invalid username or password.'
}) ,(req, res)=> {

});








//=====================================
// LOGOUT ROUTES
//=====================================

/***  Route to LOGOUT a user ***/
router.get('/logout', (req, res)=> {
    req.flash('success', `You have been logged out :)`)
    req.logout();
    res.redirect('/')
});

module.exports = router;