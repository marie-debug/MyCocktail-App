import mongoose from 'mongoose'

// Defining the cocktailSchema
const cocktailSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name for your cocktail.'] 
    },
    ingredients: {
        type: String,
        required: [true, 'Please add your ingredients.'] 
    },
    instructions: {
        type: String,
        required: [true , 'Please add your instructions.']
    }
})

// Defining the cocktail Model
const CocktailModel = mongoose.model('MyCocktail', cocktailSchema)

export default CocktailModel