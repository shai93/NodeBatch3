const mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    googleId:{
        type:Number
    },
    facebookId:{
        type:Number
    }
});


UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('BlogUser', UserSchema);