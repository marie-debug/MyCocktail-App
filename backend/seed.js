import {CocktailModel, dbClose } from './db.js'

await CocktailsModel.deleteMany()
console.log('Deleted all cocktails')


const cocktails = [
  { name: 'margharita' },
  { instructions: 'shake and stir'},
  { ingredients: ['pineapple','apple']}
]

const cocktail = await CocktailsModel.insertMany(cocktails)
console.log('Inserted cocktails')


dbClose()