const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://muhammadzubairsultan22:12345@cluster0.bzsnvef.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connection succeful")
}).catch((e)=>{
     console.log(e)
})

//  Now we make a Schema

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

//  Now we make a collection

const User = mongoose.model("User",schema)

module.exports=User