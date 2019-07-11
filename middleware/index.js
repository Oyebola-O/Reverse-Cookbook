const recipe = require('../models/recipe');
const comments = require('../models/comments');
const user = require('../models/users');

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

const checkCommentOwner = (req, res, next) => {
    if(req.isAuthenticated()){
        comments.findById(req.params.cid, (err, comment)=> {
            if(err){
                //TODO Handle error
                console.log(err)
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

// const checkCampOwner = (req, res, next) => {
//     if(req.isAuthenticated()){
//         camp.findById(req.params.id, (err, camp)=> {
//             if(err){
//                 console.log(err)
//                 res.redirect('back');
//             } else {
//                 if(camp.author.id.equals(req.user.id)){
//                     return next();
//                 } else {
//                     res.redirect('back');
//                 }
//             }
//         });
//     } else {
//         res.redirect('back');
//     }
// }

module.exports = {
    isLoggedIn, checkCommentOwner
}