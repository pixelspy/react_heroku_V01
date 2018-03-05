const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/front/build'))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/front/build/index.html')
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Connected!')
})
