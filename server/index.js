const express = require('express')
const parser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(morgan('dev'))
app.use(parser.json())

app.use(express.static(__dirname + '/../client/dist'))

let PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('ERROR connecting to server:', err)
  }
  // eslint-disable-next-line no-console
  console.log(`cunningbrett is listening on port ${PORT}!`)
})