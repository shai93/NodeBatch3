const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    content:{
        type:String
    },
    userId:{
        type:String
    },
    image:{
        type:String
    }
});

module.exports = mongoose.model('Post', PostSchema);