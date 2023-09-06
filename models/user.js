const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const User = new Schema({
    email:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    display_name:{
        type: String,
        required: true
    },
    created:{
        type:Date,
        default: new Date(Date.now()).toISOString()
    },
    deleted:{
        flag:{
            type: Boolean,
            default: false
        },
        at:{
            type: Date,
            default: null
        }
    },
    _id: {
        type: String,
        default: function(){
            return `${this.email}*created@*${this.created}`;
        }
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    logins: {
        type: [Date],
        default: [this.created]
    },
    lastLogin: {
        type: Date,
        default: function(){
            return this.created
        }
    },
})

module.exports = mongoose.model("User",User);