const mongoose= require('mongoose')
const User = require('./user')

const BasicInfo = new mongoose.Schema({
    propertyType:{
        type:String,
        enum:{
            values:["house","flat","plot"]

        }
    },
    Negotable:{
        type:Boolean,
      
        default:false

    },
    Price:{
        type:Number,
        required:true
    },
    OwnerShip:{

    },
    PropertyAge:{
        type:Number,
        required:true
    },
    PropertyApproved:{

    },
    Propertydescription:{
        type:String,

    },
    BankLoan:{type:Boolean},
    user: { type: mongoose.Types.ObjectId, ref: User }


})


module.exports = mongoose.model('BasicInfo',BasicInfo)