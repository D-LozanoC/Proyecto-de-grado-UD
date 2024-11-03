const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a mi server</h1>');
})

app.listen(PORT, () => {
    console.log('Server running on port http://localhost:3000');
})