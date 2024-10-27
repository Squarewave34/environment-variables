// must be on top or else you die
require('dotenv').config()

const express = require('express')
const app = express()
const port=process.env.port

app.get('/', (req, res) => {
  res.send("the server is running")
})

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})