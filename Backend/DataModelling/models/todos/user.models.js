import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase: true
    },
    password:{
        type: String,
        required:[true,"password is required"],
        unique:true,
    },
    isActive: {
        type: Boolean,
        required:false
    }
},{timestamps: true});
export const User = mongoose.model('User', userSchema);