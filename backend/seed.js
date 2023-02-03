import {dbClose } from './db.js'
import {CocktailModel} from './models/cocktailModel.js'

await CocktailModel.deleteMany()
console.log('Deleted all cocktails')


const cocktails = [
  {id:1234},
  { name: 'margharita' },
  { instructions: 'shake and stir'},
  { ingredients: ['pineapple','apple']}

]

await CocktailModel.insertMany(cocktails)

console.log('Inserted test cocktails')


dbClose()