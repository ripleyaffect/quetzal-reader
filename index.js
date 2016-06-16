const express = require('express')
const app = express()
const { v4 } = require('uuid')

const { PORT } = require('./config')


app.use('/static', express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  try {
    res.sendFile(`${__dirname}/public/index.html`)
  } catch(err) {
    res.send(err)
  }
})

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})



// Socket setup

const io = require('socket.io')(server);

let connections = [];

io.on('connection', socket => {
  connections = connections.concat(socket)

  socket.on('message', (message) => {
    console.log(message)
    connections.forEach(connection => connection.emit(
      'message', Object.assign({}, message, { id: v4() })))
  })

  socket.on('disconnected', () => {
    connections = connections.filter(connection => connection != socket)
  })
})