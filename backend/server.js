const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
require('dotenv/config')
const app = express()

const PORT = process.env.PORT
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
}))

app.use(express.json())

app.use(bodyParser.urlencoded({
  extended:true
}))

app.listen(PORT,()=>{
  console.log(`Server started successfully on port ${PORT}`)
})