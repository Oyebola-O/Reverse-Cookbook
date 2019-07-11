const express = require('express');
const router = express.Router({mergeParams: true});
const passport = require('passport');
const user = require('../models/users');

router.get('/register', (req, res)=> {
    res.render('register');
});


router.post('/register', (req, res)=> {
    const {username, password} = req.body;
    const newuser = new user({username});
    user.register(newuser, password, (err, retuser)=> {
        if(err){
            //TODO: Proper error checking
            console.log(`auth.js router.post ${err}`);
            return res.render('register');
        } else {
            //TODO: Return them to users home page
            passport.authenticate('local')(req, res, ()=> {
                res.redirect('/');
            });
        }
    });
});


router.get('/login', (req, res)=> {
    res.render('login')
});

//TODO: Error checking proper
router.post('/login', passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/login'
}) ,(req, res)=> {});

router.get('/logout', (req, res)=> {
    req.logout();
    res.redirect('/')
});

module.exports = router;