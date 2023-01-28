// This is not connected to anything (yet)
// 1. Concoller is ready with asyncHandler
// 2. Need to figure out export module defauly
// 3. Clean up routes in myCocktail_routes.js 

const asyncHandler = require('express-async-handler')

// @desc    Get a cocktail
// @route   GET /my/cocktail
// @access  Private 
const getMyCocktail = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Get my cocktails' })
})

// @desc    Add a cocktail
// @route   POST /my/cocktail
// @access  Private 
const addCocktail = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Add a cocktail' })
})

// @desc    Updated a cocktail
// @route   PUT /my/cocktail/name
// @access  Private 
const updateCocktail = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update ${req.params.name}` })
})

// @desc    Delete a cocktail
// @route   DELETE /my/cocktail/name
// @access  Private 
const deleteCocktail = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete ${req.params.name}` })
})




module.exports = { 
    getMyCocktail,
    addCocktail, 
    updateCocktail, 
    deleteCocktail,
 } 
 