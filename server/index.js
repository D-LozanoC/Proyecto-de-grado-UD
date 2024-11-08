import express from 'express'
import morgan from 'morgan'
import { PORT } from './config/config.js'


const app = express()
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('<h1>Bienvenid@ al servidor</h1>');
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})