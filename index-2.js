const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.status(200).send("success")
  })

  app.get('/health', (req, res) => {
    res.status(200).send("success")
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })