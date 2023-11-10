require('dotenv').config();

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const swRoutes = require('./routes/swRoutes')
const port = process.env.PORT
const mongoUrl = process.env.MONGO_URL

//middleware
app.use(express.json());

app.use((req,res, next) => {
    next()
});

app.use('/api', swRoutes)

app.listen(port, () =>{
    console.log(`Connecting to the DB and listening on port: ${port}`)
    mongoose.connect(mongoUrl)
    .then(()=> {
        console.log("Connected to mongoose")
    })
    .catch((error)=> {
        console.log(`error: ${error}`)
    })
})
