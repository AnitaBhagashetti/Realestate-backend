const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()


app.use(express.json())

const port = process.env.PORT || 5000

const start =async()=>{
    try {
        await connectDB(process.env.MONGOO_URI)
        console.log(`server is running on port ${port}`)
        
    } catch (error) {
        console.log(error)
        
    }
    
}

start()