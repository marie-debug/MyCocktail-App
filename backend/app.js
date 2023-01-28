import express from 'express'
import colors from 'colors'
import {} from 'dotenv/config'
import cors from 'cors'
import errorHandler from './middleware/errorMiddleware.js'
import cocktailRoutes  from  './routes/cocktail_routes.js'
import myCocktailRoute from './routes/myCocktail_routes.js'
import UserRoute from './routes/user_routes.js'
import connectDB from './config/db.js'

const port = process.env.PORT || 3000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/cocktails',cocktailRoutes)
app.use('/my/cocktail', myCocktailRoute)
app.use('/user', UserRoute)

app.use(errorHandler)

app.get('/', (req, res) => res.send('Are you ready for a cocktail?'));

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app

// app.listen(3000);

