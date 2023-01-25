import express from 'express';
import cors from 'cors'
import  cocktailRoutes  from  './routes/cocktail_routes.js'
const app = express()

app.use(cors())
app.use('/cocktails',cocktailRoutes)








export default app

app.listen(3000);

