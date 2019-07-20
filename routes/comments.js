const express = require('express');
const router = express.Router({mergeParams: true});
const recipeModel = require('../models/recipe');
const comments = require('../models/comments');
const user = require('../models/users');
const middleware = require('../middleware');


// Create a comment
router.post('/', middleware.isLoggedIn, (req, res)=> {
    let rid = req.params.rid;
    recipeModel.findOne({id: rid}, (err, recipe)=> {
        if(err){
            // TODO: Handle error well
            console.log(err)
        } else {
            
            comments.create(req.body.comment, (err, comment)=> {
                if(err){
                    console.log(err)
                } else {
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.time = "10 days ago"
                    comment.save()
                    recipe.comments.push(comment);
                    recipe.save()
                    res.redirect(`/recipe/search/get/${rid}`)
                }
            })
        }
    });
});


// Edit a comment
router.put('/:cid', middleware.checkCommentOwner,(req, res)=> {
    comments.findByIdAndUpdate(req.params.cid, req.body.comment,(err, updatedComment)=> {
        if(err){
            res.redirect('back');
        } else {
            res.redirect(`/recipe/${req.params.rid}`);
        }
    });
});


// Delete a comment
router.delete('/:cid', middleware.checkCommentOwner,(req, res)=> {
    comments.findByIdAndDelete(req.params.cid, (err)=> {
        if(err){
            console.log(err)
            res.redirect('back')
        } else {
            res.redirect(`/recipe/${req.params.rid}`)
        }
    });
});




module.exports = router;