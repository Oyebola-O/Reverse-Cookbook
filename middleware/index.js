const recipe = require('../models/recipe');
const comments = require('../models/comments');
const user = require('../models/users');

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash('error', `You need to be logged in to do that :(`)
    res.redirect('back')
}

const checkCommentOwner = (req, res, next) => {
    if(req.isAuthenticated()){
        comments.findById(req.params.cid, (err, comment)=> {
            if(err){
                res.redirect('back');
            } else {
                if(comment.author.id.equals(req.user.id)){
                    return next();
                } else {
                    //TODO Handle error
                    res.redirect('back');
                }
            }
        });
    } else {
        // TODO Handle error
        res.redirect('back');
    }
}


module.exports = {
    isLoggedIn, checkCommentOwner
}