import express from 'express'
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
      res.status(500).json({ error: err.message })
    }
  })

router.get('/:id', async (req, res) => {
    try {
      const cocktail = await CocktailModel.findById(req.params.id)
      if (cocktail) {
        res.send(cocktail)
      } else {
        res.status(404).json({ error: 'Could not find your cocktail' })
      }
    }
    catch (err) {
      res.status(500).json({ error: err.message })
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
        res.status(200).json(addedCocktail)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// @desc    Updated a cocktail
// @route   PUT /my/cocktail/name
// @access  Private 
router.put('/:id', async (req, res) => {
    const { name, ingredients, instructions } = req.body
    const newCocktail = {name, ingredients, instructions }

    try {
      const cocktail = await CocktailModel.findByIdAndUpdate(req.params.id, newCocktail, {returnDocument: 'after' })
      if (cocktail) {
        res.send(cocktail)
      } else {
        res.send(404).json({ error: 'Entry not found' })
      }
    }
    catch (err0r) {
      res.status(500).json({ error: err.message })
    }
})

// @desc    Delete a cocktail
// @route   DELETE /my/cocktail/name
// @access  Private 
router.delete('/:id', async (req, res) => {
  try {
    const cocktail = await CocktailModel.findByIdAndDelete(req.params.id)
    if (cocktail) {
      res.sendStatus(204)
    } else {
      res.status(404).json({ error: 'Cocktail not found '})
    }
  }
  catch (err) {
    res.status(500).json({ message: `Deleted ${req.params.name}` })
  }
})



export default router
