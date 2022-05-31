const mongoose = require('mongoose')

const User = require('./user')

const PropertdetailsSchema = new mongoose.Schema({
    length: { type: Number },
    Breadth: { type: Number },
    AreaUnit: { type: String },
    NoofBHK: { type: Number },
    NoofFloor: { type: Number },
    Attached: { type: String },
    WesternToilet: { type: Boolean },
    Furnished: { type: Boolean },
    CarParking: { type: Boolean },
    Lift: { type: Number, required: true },
    Electricity: { type: String },
    Facing: { type: String },
})


module.exports = mongoose.model('Propertdetails', PropertdetailsSchema)