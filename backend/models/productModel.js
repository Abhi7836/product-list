import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name:{type: String, required: true},
    image:{type: String, required: true},
    creater:{type: String, required: true},
    duration:{type:String, required: true},
    description:{type:String, required: true},
    rating:{type:Number, required: true,default:0},
    numReviews:{type:Number, required: true,default:0},
    price:{type:Number, required: true,default:0},
    countInStock:{type:Number, required: true,default:0},
},{ timestamps:true});

const Product = mongoose.model('Product', productSchema);

export default Product