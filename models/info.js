const mongoose = require('mongoose');

const InfoSchema = mongoose.Schema({
    PPID: {
        type: String,
        required: true,
        unique: true,
        },
    image: {
        type: String,
        required: true
        },
    propertyType: {
        type: String,
        required: true
        },
    Mobile: {
        type: Number,
        required: true
        },
    TotalArea: {
        type: Number,
        required: true
        },
    views: {
        type: Number,
        // required: true
        default:0
    },
    status: {
        type: String,
        default:"Unsold"
    },
    daysLeft: {
        type: Number,
        // required: true
        default:0

    }
})

module.exports = mongoose.model("Info",InfoSchema)