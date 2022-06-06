const mongoose = require('mongoose')
const User = require('./user')

const BasicInfo = new mongoose.Schema({
    propertyType: { type: String },
    TotalArea: { type: String },
    Mobile: { type: String },
    PPDID: { type:String },
    user: { type: mongoose.Types.ObjectId, ref: User }
})


module.exports = mongoose.model('BasicInfo', BasicInfo)