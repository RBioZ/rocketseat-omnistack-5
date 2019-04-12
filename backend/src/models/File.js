const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true,        
    },
    path:{
        type: String,
        required: true,
    },
}, 
{
    timestamps: true
});

module.exports = mogoose.model('File', File);