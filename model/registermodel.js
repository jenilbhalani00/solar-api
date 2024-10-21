var mongoose= require('mongoose')


var registerschema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    mobile:{
        type:String,
    },
    age:{
        type:String,
    },
    city:{
        type:String,
    }


})

module.exports = mongoose.model('register',registerschema)