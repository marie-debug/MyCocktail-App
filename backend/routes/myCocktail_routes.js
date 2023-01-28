import express from 'express'
const router = express.Router()
// import { getMyCocktail } from '../controllers/myCocktailController'

// @desc    Get a cocktail
// @route   GET /my/cocktail
// @access  Private 
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get my cocktails' })
})

// @desc    Add a cocktail
// @route   POST /my/cocktail
// @access  Private 
router.post('/', (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Add a cocktail' })
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
