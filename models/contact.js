const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        message:{
            type:String,
            required:false,
        },
        terms:{
            type:Boolean,
            required:true,
        },
    }
)

const Contact = mongoose.model("contacts",contactSchema);

module.exports = Contact;