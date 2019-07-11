const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    liked:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'recipe'
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);
