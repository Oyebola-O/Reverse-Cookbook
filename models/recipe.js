const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    id: Number,
    title: String,
    image: String,
    numIngredients: Number,
    likes: Number,
    readyInMinutes: Number,
    creditsText: String,
    sourceUrl: String,
    vegetarian: Boolean,
    vegan: Boolean,
    glutenFree: Boolean,
    dairyFree: Boolean,
    extendedIngredients: [],
    steps:[],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comments'
        }
    ]
});

module.exports = mongoose.model('recipe', recipeSchema);