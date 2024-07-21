const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    thumbnail:{type:String,required:true},
    category:{type:String,required:true},
    stock:{type:Number,required:true},
    model:{type:String,required:true},

}
)
module.exports = mongoose.model('Product',productSchema)