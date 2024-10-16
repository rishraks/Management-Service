const express = require('express')
const mongoose = require('mongoose')

const app = express()

const url = 'mongodb://localhost/service'

mongoose.connect(url)
const con = mongoose.connection

con.on('open', () =>{
    console.log("Connected...")
})

app.use(express.json())

const serviceRouter = require('./routers/services')
app.use('/service', serviceRouter)


app.listen(8080, () =>{
    console.log("Server Started...")
})