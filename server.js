const express = require('express')
const mongoose = require('mongoose')
const path=require('path')
const { env } = require('process')

const app = express()

require('dotenv/config')

app.use(express.json())

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.DB_PATH,
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to Database....') })
    .catch(err => console.log('ERROR', err))

    app.use('/',require('./routes/api/items'))

    if(process.env.NODE_ENV==='production'){
        app.use(express.static('client/build'))
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname,'client','build','index.html'))
        })
    }

app.listen(PORT, () => {
    console.log(`Server engaged on port : ${PORT}....`)
})

