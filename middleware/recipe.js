const fetch = require('node-fetch');
const recipeModel = require('../models/recipe');

// Check my db for data
const checkMyDB = (req, res, next)=> {
    const rid = req.params.rid;
    recipeModel.findOne({ id: rid }, (err, recipe)=> {
        if(err){
            // TODO Handle error
            console.log(` error in middleware.js recipe.js checkmydb ${error}`)
            res.send(error)
        } else {
            if(recipe){
                res.redirect(`/recipe/${rid}`);
            } else {
                return next();
            }
        }
    });
}


const checkOnline = (req, res, next)=> {
    const rid = req.params.rid;
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${rid}/information`;
    const object = {
        headers: {
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd22f337e00mshc681b77232bbac7p127fdejsnbdefb85b6ece'
        }
    }

    fetch(url, object).then(recipe => recipe.json())
    .then((recipe)=> {
        // Add to the database
        let {id, title, image, numIngredients, likes,readyInMinutes, creditsText,
             sourceUrl, vegetarian,vegan, glutenFree, dairyFree} = recipe;
            
        let extendedIngredients = [];
        for(var {name: n, original: o} of recipe.extendedIngredients){
            extendedIngredients.push({name: n,original: o})
        }


        let steps = [];
        if(recipe.analyzedInstructions[0]){
            for(var step of recipe.analyzedInstructions[0].steps){
                steps.push(step.step)
            }
        }


        let newrecipe = {id, title, image, numIngredients, likes, readyInMinutes,
            creditsText, sourceUrl, vegetarian, vegan, glutenFree, dairyFree, extendedIngredients, steps};


        //TODO Handle error
        recipeModel.create(newrecipe, (err, recipe)=> {
            if(err) {
                console.log(err)
            } else {
                res.render('recipe/recipe' ,{recipe});
            }
        });
    })
    
    .catch((error)=> {
        if(error){
            //TODO: Handle error properly
            console.log(error);
            res.send('There was an error recipe.js router.post search/get')
        }
    });
}



module.exports = { checkMyDB, checkOnline }