/*const express = require('express')
const app = express()
const port = 5000

app.get('/ping', function (req, res) {
    res.send('PONG')
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
*/
const express = require('express')
const app = express()
const port = 5051
let counter = 0

app.get('/increment', function (req, res) {
    console.log('counter has been incremented...')
    counter = counter + 1
    res.send('The value of counter is ' + counter)

  })

app.get('/decrement', function (req, res) {
    console.log('counter has been decremented...')
    counter = counter - 1
    res.send('The value of counter is ' + counter)
  })

  app.get('/value', function (req, res) {
    res.send('The value of counter is ' + counter)
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))