import express from 'express';
import {} from 'dotenv/config'
import cors from 'cors'
import errorHandler from './middleware/errorMiddleware.js'
import  cocktailRoutes  from  './routes/cocktail_routes.js'
import myCocktailRoute from './routes/myCocktail_routes.js'

const port = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/cocktails',cocktailRoutes)
app.use('/my/cocktail', myCocktailRoute)

app.use(errorHandler)

app.get('/', (req, res) => res.send('Do you want to play a game?'));

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app

// app.listen(3000);

