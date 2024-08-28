const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true 
    },
    userName:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

const user = mongoose.model('USER', userSchema)

module.exports = user



