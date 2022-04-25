import 'dotenv/config'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen({ port: process.env.PORT }, () => {
  console.log(`Server are listening on port ${process.env.PORT}`)
})
