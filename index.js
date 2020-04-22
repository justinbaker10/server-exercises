const express = require('express')
const app = express()
const port = 5000

app.get('/ping', function (req, res) {
    res.send('PONG')
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))