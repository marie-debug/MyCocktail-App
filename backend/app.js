import express from 'express'
import {} from 'dotenv/config'
import cors from 'cors'
import errorHandler from './middleware/errorMiddleware.js'
import cocktailRoutes  from  './routes/cocktail_routes.js'
import myCocktailRoutes from './routes/myCocktail_routes.js'

import {connectDB}from './config/db.js'

await connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/cocktails',cocktailRoutes)
app.use('/my/cocktail', myCocktailRoutes)


app.use(errorHandler)


app.get('/', (req, res) => res.send('Are you ready for a cocktail?'));

app.post('/my/cocktail', (req, res) => {res.sendStatus(200)})



export default app

