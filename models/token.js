const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const Token = new Schema({
    _id:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    }
})

module.exports = mongoose.Schema('Token',Token);