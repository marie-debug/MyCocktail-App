import express from 'express'
import CocktailModel from '../models/cocktailModel.js'

const router = express.Router()

// gets cocktail from the db 
router.get('/', async (req, res) => {
    try {
      const cocktail = await CocktailModel.find()
      if (cocktail) {
        res.send(cocktail)
      } else {
        res.status(404).json({error: 'cocktail not found' })
      }
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  })

//post new cocktail entries to db after checking whether cocktail exists
  router.post('/', async (req, res) => {
      try{
      const newCocktail = CocktailModel.find({ ...req.body })
      if(newCocktail){
        res.status(403).json({error: 'Cocktail already exists'})
      }
      else{
        const insertedCocktail = await newCocktail.save()
        return res.status(201).json(insertedCocktail)
      }
    }catch(err) {res.status(422).json({ error: err.message })}
  
  })
   

// deletes cocktail by id in the db and returns an ok response
router.delete('/:id', async (req, res) => {
  try {
    const cocktail = await CocktailModel.findByIdAndDelete(req.params.id)
    if (cocktail) {
      res.status(204).json({ message: `Deleted ${req.params.name}` })    
    } else {
      res.status(404).json({ error: 'Cocktail not found '})
    }
  }
  catch (err) {
    res.status(500).json({ error: err.message })
  }
})



export default router
