const express = require('express');
const fetch = require('node-fetch');
const router = express.Router({mergeParams: true});
const recipe = require('../models/recipe');
const response = require('../test/response');


router.get('/search', (req, res)=> {
    res.render('recipe/search');
});



router.post('/search/get', (req, res)=> {
    res.render('recipe/results' ,{response});
    // const ingredients = req.body.ingredients.ing;
    // const number = 4, ranking = 1, ignorePantry = "true";
    // let ingstr = "";
    // ingredients.forEach(ing => {
    //     ingstr === "" ? ingstr+= `${ing}` :  ingstr+= `%2C${ing}`
    // });
    
    // const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${number}&ranking=${ranking}&ignorePantry=${ignorePantry}&ingredients=${ingstr}`;
    // const object = {
    //     headers: {
    //         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    //         'X-RapidAPI-Key': 'd22f337e00mshc681b77232bbac7p127fdejsnbdefb85b6ece'
    //     }
    // }

    // fetch(url, object).then(response => response.json())
    // .then((response)=> {
    //     res.render('recipe/results' ,{response});
    // })
    
    // .catch((error)=> {
    //     if(error){
    //         //TODO: Handle error properly
    //         console.log(error);
    //         res.send('There was an error recipe.js router.post search/get')
    //     }
    // });
});


module.exports = router;