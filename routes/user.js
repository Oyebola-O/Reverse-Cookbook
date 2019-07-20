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
router.get('/recipelike/:mydb_rid', middleware.isLoggedIn ,(req, res)=> {
    // let uid = req.user._id;
    let mydb_rid = req.params.mydb_rid;
    users.findById(req.user._id, (err, user)=> {
        if(err){
            // Error
            console.log(err)
        } else {
            // Handle, tell user item has been saved to his list
            //console.log(user)
            if(user.liked.includes(mydb_rid)){
                // TODO: Handle error, Tell user he already has it
                console.log("User has it")
            } else {
                // TODO: Handle error, Tell user it's been added
                console.log("doesn't have it")
                user.liked.push(mydb_rid);
                user.save();
            }
            res.send(user)
        }
    });
});


// 
router.get('/getliked/:uid', (req, res)=> {
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