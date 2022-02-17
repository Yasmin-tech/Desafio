const express = require('express')

const app = express()

app.listen(4000, () => console.log('hello word'))

app.get('/', (req,res) => res.send('Servidor ok'))