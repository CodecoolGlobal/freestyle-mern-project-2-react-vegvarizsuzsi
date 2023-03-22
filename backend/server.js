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
    console.log(req.path, req.method)
    next()
});

app.use('/api', swRoutes)
// app.get('/', (req, res) => {
//     res.json({msg: 'Welcome to the app'})
// });

mongoose.connect(mongoUrl)
.then(()=> {
    app.listen(port, () =>{
        console.log(`Connecting to the DB and listening on port: ${port}`)
    })
})
.catch((error)=> {
    console.log(error)
})
