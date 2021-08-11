const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            trim:true,
            required:true
        },
        email: {
             type: String,
            trim:true,
            required:true,
            unique: true
        },
        mobile: {
             type: String,
            trim:true,
            required:true,
            unique: true
        },
        address: {
            type: String,
            trim:true,
            required:true,
            unique: true
        },
        qulification: {
            type: String,
            trim: true,
            required: true
        }
    },
    {
        collection: "users",
        timestamps: true
    
    });

module.exports = mongoose.model("User", User);