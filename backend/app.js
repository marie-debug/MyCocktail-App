import fetch from 'node-fetch';
import express from 'express';

const app = express();


//get cocktail by name
app.get('/cocktails/:name', async function(req, res){

    console.log(req.params.name)
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s='+ req.params.name);
    const data = await response.json();
    let cocktailDetails = data.drinks
    
    let cocktails = new Array()
    cocktailDetails.forEach((item,index)=>{
      
        cocktails.push({
                "name": item.strDrink,
                "recipe": item.strInstructions
            
            })
    })
    
    
   res.send(cocktails);
});


//get cocktail by alcohol
app.get('/cocktails/alcohol/:name', async function(req, res){


    // console.log(req.params.name)
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?i=' + req.params.name)
    const data = await response.json();
    let cocktailDetails = data.drinks
    console.log(cocktailDetails)
   
    let cocktails = new Array()
    cocktailDetails.forEach((item,index)=>{
     
        cocktails.push({
                "name": item.strDrink,
                "image": item.strDrinkThumb
           
            })
    })
   
   
   res.send(cocktails);
 });
 













app.listen(3000);


