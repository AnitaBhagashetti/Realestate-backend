const mongoose = require('mongoose')
const User = require('./user')

const GeneralInfoSchema = new mongoose.Schema({
    Name: { type: String },
    Mobile: { type: Number },
    Postedby: { type: String },
    SelectType: { type: String },
    Featuredpackage: { type: String },
    PPDPackage: { type: String },
    Image: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: User }
})

module.exports = mongoose.model('GeneralInfo', GeneralInfoSchema)