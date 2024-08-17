import mongoose from 'mongoose';
const OrderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
});
const OrderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    customerName:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    orderItems:{
        type:[OrderItemSchema],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:'PENDING',
    }
},{timestamps:true});
export const Order = mongoose.model('Order',OrderSchema);