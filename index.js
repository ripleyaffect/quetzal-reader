var express = require('express')

var config = require('./config')
var PORT = config.PORT

var app = express()

app.use('/static', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  try {
    res.sendFile(__dirname + '/public/index.html')
  } catch(err) {
    res.send(err)
  }
})

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT)
})