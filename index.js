const express = require('express')

const { PORT } = require('./config')

const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})