import express from 'express';
import cors from 'cors'
import  cocktailRoutes  from  './routes/cocktail_routes.js'
const port = process.env.PORT || 3000;

const app = express()

app.use(cors())
app.use('/cocktails',cocktailRoutes)


app.get('/', (req, res) => res.send('Do you want to play a game?'));

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app

// app.listen(3000);

