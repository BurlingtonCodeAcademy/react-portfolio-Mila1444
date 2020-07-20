const express = require('express');
const path = require('path')
const port = process.env.port || 5000

const app = express()

app.use(express.static(path.resolve('./client/build')))

app.get('*', (req, res) => {
    res.sendFile('./client/build/index.html')
})

app.listen(port,() => {
    console.log('Listening on port:', port)
})
