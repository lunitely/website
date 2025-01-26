const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/style', (req, res) => {
    res.sendFile(__dirname + '/views/style.css')
})

app.get('/font', (req, res) => {
    res.sendFile(__dirname + '/views/font.ttf')
})

app.listen(8106)