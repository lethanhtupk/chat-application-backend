const express = require('express')
const expressWs = require('express-ws')

const appBase = express()
const wsInstance = expressWs(appBase)
const { app } = wsInstance

app.get('/', function (req, res) {
  res.end('Hello word')
})

app.ws('/', function (ws, req) {
  ws.on('message', function (msg) {
    console.log('Message received: ', msg)
  })
})

app.listen(8000, () => {
  console.log('server is listening on port 3000')
})

export default app
