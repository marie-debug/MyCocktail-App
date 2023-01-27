const mongoose = require('mongoose')

const cocktailSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            red: 'User'
        },
        cocktail: {
            type: String,
            required: [true, 'Please select a cocktail']
        },
    }
)

module.exports = mongoose.model('Cocktail', cocktailSchema)