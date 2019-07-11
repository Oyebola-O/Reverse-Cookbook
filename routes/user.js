const express = require('express');
const router = express.Router({mergeParams: true});
const recipeModel = require('../models/recipe');
const comments = require('../models/comments');
const users = require('../models/users');
const middleware = require('../middleware');

// Redirect to load user home page
router.get('/', (req, res)=> {
    res.redirect(`/users/${req.user._id}`)
});


// Save recipe as user's like
router.get('/recipelike/:mydb_rid', (req, res)=> {
    // let uid = req.user._id;
    let mydb_rid = req.params.mydb_rid;
    users.findById(req.user._id, (err, user)=> {
        if(err){
            // Error
            console.log(err)
        } else {
            // Handle, tell user item has been saved to his list
            //console.log(user)
            user.liked.push(mydb_rid);
            user.save();
            res.send(user)
        }
    });
});


// 
router.get('/:uid', (req, res)=> {
    let currentUser = req.user;
    let username = currentUser.username;


    users.findById(currentUser._id).populate('liked').exec((err, user)=> {
        if(err){
            //TODO Handle error properly
            console.log(err)
        } else {
            // Handle error properly
            res.render('users/home', {user})
        }
    });
});


module.exports = router;