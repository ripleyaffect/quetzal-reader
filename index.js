const express = require('express')
const app = express()

const { PORT } = require('./config')


app.use('/static', express.static(`${__dirname}/public`))

app.get('*', (req, res) => {
  try {
    res.sendFile(`${__dirname}/public/index.html`)
  } catch(err) {
    res.send(err)
  }
})

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
