import fetch from 'node-fetch';
import express from 'express';
import * as dotenv from 'dotenv'

dotenv.config()
const router = express.Router()
const app = express();


//get cocktail by name and ingredients
router.get('/:name', async function(req, res){
    const response = await fetch('https://api.api-ninjas.com/v1/cocktail?name=' +req.params.name,
    {
     method: 'GET',
     headers: {
         'X-Api-Key': process.env.API_NINJA_KEY
          
     }
 })
    const data = await response.json();
    console.log(data)
        let cocktails = new Array()
    data.forEach((item)=>{
      
        cocktails.push({
                "name": item.name,
                "ingredients": item.ingredients,
                "instructions": item.instructions
            
            })
    })
    res.send(cocktails);
 });




 export default router