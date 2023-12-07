const express =require('express')
const cors=require('cors');
const {db} = require('./db/db')
require('dotenv').config()
const {readdirSync} = require('fs')

const PORT=process.env.PORT
const app= express()
app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) =>  app.use('/api/v1', require('./routes/' + route)))


const server=() =>  {
    db()
    app.listen(PORT,() => {
        
    console.log("your are listening to ",PORT)

    })
}
server()