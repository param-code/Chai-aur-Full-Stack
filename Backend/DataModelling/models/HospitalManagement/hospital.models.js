import mongoose from 'mongoose';
const HospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    PinCode:{
        type:Number,
        required:true
    },
    Specialization:{
        type:[{
            type:String,
            required:true
        }],
        required:true
    }
},{timestamps: true});
export const Hospital = mongoose.model('Hospital',HospitalSchema);