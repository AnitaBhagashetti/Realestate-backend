const mongoose= require('mongoose')
const User = require('./user')

const LocationInfoSchema = new mongoose.Schema({
    Email:{
        type:String,
        
    },
    City:{
        type:String,
        
    },
    Area:{
        type:String,
        
    },
    Pincode:{
        type:Number,
        

    },
    Adresss:{
        type:String,
        
    },
    Landmark:{
        type:String,
        
    },
    Latitude:{
        type:String
        
    },
    Longitude:{
        type:String
        
    },
    user: { type: mongoose.Types.ObjectId, ref: User }
    
})


module.exports = mongoose.model('LocationInfo',LocationInfoSchema)