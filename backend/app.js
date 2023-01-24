import fetch from 'node-fetch';
import express from 'express';

const app = express();

app.get('/cocktails', function(req, res){


    
   res.send("cocktails");
});



const response = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
const data = await response.json();
let cocktailDetails = data.drinks

let cocktails = new Array()
cocktailDetails.forEach((item,index)=>{
  
    cocktails.push({
            "name": item.strDrink,
            "recipe": item.strInstructions
        
        })
})

console.log(cocktails)


app.listen(3000);


