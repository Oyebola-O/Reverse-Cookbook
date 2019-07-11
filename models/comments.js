const mongoose = require('mongoose');
const commentsSchema = new mongoose.Schema({
    text: String,
    time: String,
    author: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    }
});

module.exports = mongoose.model('comments', commentsSchema);