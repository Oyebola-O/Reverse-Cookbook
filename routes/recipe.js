const express = require('express');
const fetch = require('node-fetch');
const router = express.Router({mergeParams: true});
const recipeModel = require('../models/recipe');
const recipeMiddleware = require('../middleware/recipe');
const tips = require('../db/tips');
const num = 92;//tips.length



router.get('/search/:food', (req, res)=> {
    let response;
    let tip = tips[~~(Math.random() * num)]
    let food = req.params.food;
    if(food == 'Beef'){           response = require('../db/beef') } 
    else if(food == 'Eggs') {      response = require('../db/egg') } 
    else if(food == 'Lettuce') {  response = require('../db/lettuce') } 
    else {                      response = require('../db/pasta') }
    
    showingfor = food;
    res.render('recipe/results' ,{response, showingfor, tip});
});


//=====================================
// RECIPE ROUTES
//=====================================


/*** Route to search recipes ***/
router.post('/search/get', (req, res)=> {
    let tip = tips[~~(Math.random() * num)]
    const ingredients = req.body.ingredients.ing;
    const number = 24, ranking = 1, ignorePantry = "true";
    let ingstr = "";
    ingredients.forEach(ing => {
        ingstr === "" ? ingstr+= `${ing}` :  ingstr+= `%2C${ing}`
    });
    
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${number}&ranking=${ranking}&ignorePantry=${ignorePantry}&ingredients=${ingstr}`;
    
    const object = {
        headers: {
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd22f337e00mshc681b77232bbac7p127fdejsnbdefb85b6ece'
        }
    }

    fetch(url, object).then(response => response.json())
    .then((response)=> {
        console.log(response)
        showingfor = '';
        for(var i = 0; i < ingredients.length; i++){
            if(i == ingredients.length - 1){
                showingfor+= `and ${ingredients[i]}`; break;
            }   showingfor += `${ingredients[i]}, `
        }
        res.render('recipe/results' ,{response, showingfor, tip});
    })
    
    .catch((error)=> {
        if(error){
            //TODO: Handle error properly
            req.flash('error', `Sorry there was an error while making your request`)
            console.log(error);
            res.send('There was an error recipe.js router.post search/get')
        }
    });
});



router.get('/search/get/:rid', recipeMiddleware.checkMyDB, recipeMiddleware.checkOnline, (req, res)=> {
    //Todo: Handle error
    res.send('got to end')
    // let recipe = response2;
    // res.render('recipe/recipe' ,{recipe})
});


// Return and render a specific recipe
router.get('/:rid', (req, res)=> {
    recipeModel.findOne({id: req.params.rid}).populate('comments').exec((err, recipe)=> {
        if(err) {console.log(err)} else {
            res.render('recipe/recipe', {recipe});
        }
    });
});


module.exports = router;