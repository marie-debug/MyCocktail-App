import express from 'express'
// import { getMyCocktail } from '../controllers/myCocktailController'
import CocktailModel from '../models/cocktailModel.js'

const router = express.Router()


// @desc    Get a cocktail
// @route   GET /my/cocktail
// @access  Private 
router.get('/', async (req, res) => {
    try {
      const cocktail = await CocktailModel.find()
      if (cocktail) {
        res.send(cocktail)
      } else {
        res.status(200).json({ message: 'Get my cocktails' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
  })

router.get('/:id', async (req, res) => {
    try {
      const cocktail = await CocktailModel.findById(req.params.id)
      if (cocktail) {
        res.send(cocktail)
      } else {
        res.status(404).send({ error: 'Could not find your cocktail' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
  })

// @desc    Add a cocktail
// @route   POST /my/cocktail
// @access  Private 
router.post('/', async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body
        const newCocktail = {name, ingredients, instructions }
        const addedCocktail = await CocktailModel.create(newCocktail)
        res.status(200).send(addedCocktail)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

// @desc    Updated a cocktail
// @route   PUT /my/cocktail/name
// @access  Private 
router.put('/:name', (req, res) => {
    res.status(200).json({ message: `Update ${req.params.name}` })
})

// @desc    Delete a cocktail
// @route   DELETE /my/cocktail/name
// @access  Private 
router.delete('/:name', (req, res) => {
    res.status(200).json({ message: `Delete ${req.params.name}` })
})



export default router
