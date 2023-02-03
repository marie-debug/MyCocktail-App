import express from 'express'
import CocktailModel from '../models/cocktailModel.js'

const router = express.Router()

// get saved cocktail from the db if they exist
router.get('/', async (req, res) => {
  try {
    //connect to db and search for cocktails
    const cocktail = await CocktailModel.find()  
    if (cocktail) {
      res.json(cocktail)
    } else {
      res.status(404).json({ error: 'cocktail not found' })
    }
  }
  catch (err) {
    res.status(500).json({ error: err.message })
  }
})


//post new cocktail entries to db after checking whether cocktail exists
router.post('/', async (req, res) => {

  try {
    //checks whether cocktail exists in the db and returns it
    const cocktailList = await CocktailModel.find(req.body )

//check length of the returned list if its greater than 0 , we log 200 status and return existing list
    if (cocktailList.length > 0) {
      return res.status(200).json(cocktailList)
    }
//insert and saves cocktail into db
    const insertedCocktail = await CocktailModel(req.body).save()

    return res.status(201).json(insertedCocktail)

  } catch (err) {
    console.log(err) 
    res.status(422).json({ error: err.message })
    
   }

})


// deletes cocktail by id in the db and returns an ok response
router.delete('/:id', async (req, res) => {
  try {
    const cocktail = await CocktailModel.findByIdAndDelete(req.params.id)
    if (cocktail) {
      res.status(204).json({ message: `Deleted ${req.params.name}` })
    } else {
      res.status(404).json({ error: 'Cocktail not found ' })
    }
  }
  catch (err) {
    res.status(500).json({ error: err.message })
  }
})



export default router
