const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
        eventType:{
            type:String,
            required:true
        },
        firstName: {
            type:String,
            required:true
        },
        lastName: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        mobileNumber: {
            type:String,
            required:true
        },
        enquiry: {
            type:String,
            required:true
        }
});
module.exports = new mongoose.model("CollectedData", dataSchema);