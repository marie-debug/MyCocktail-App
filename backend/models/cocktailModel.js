import mongoose from 'mongoose'

// Defining the cocktailSchema to define structure of model
const CocktailSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'Please add a name for your cocktail.'] 
    },
    id : {
        type: Number,
        required: [true, 'Please add id.'] },

    ingredients: {
        type: Array,
        required: [true, 'Please add your ingredients.'] 
    },
    instructions: {
        type: String,
        required: [true , 'Please add your instructions.']
    }
})

// Defining the cocktail Model
const CocktailModel = mongoose.model('MyCocktail', CocktailSchema)

export default CocktailModel