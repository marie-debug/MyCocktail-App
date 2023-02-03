import fetch from 'node-fetch'
import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()
const router = express.Router()
const app = express();

// gets cocktails from external cocktail db api 

router.get('/:name', async function (req, res) {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/cocktail?name=' + req.params.name,
            {
                method: 'GET',
                headers: {
                    'X-Api-Key': process.env.API_NINJA_KEY

                }
            })
        const data = await response.json();

        //checks length of returned array and inserts into new array if necessary
        if (data.length > 0) {
            console.log(data)
            let cocktails = new Array()
            data.forEach((item) => {

                cocktails.push({
                    "name": item.name,
                    "ingredients": item.ingredients,
                    "instructions": item.instructions

                })
            })
            res.send(cocktails)
        } else { res.status(404).send('Ooops we dont seem to have this cocktail') }
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})




export default router