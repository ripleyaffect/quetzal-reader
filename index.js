var express = require('express')

var config = require('./config')
var PORT = config.PORT

var app = express()

app.use('/static', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile('index.html')
})

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT)
})