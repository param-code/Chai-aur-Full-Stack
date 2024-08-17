import mongoose from 'mongoose';
const PatientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true,
        enum:['A+','B+','AB+','AB-','A-','B-','O+','O-'],
    },
    Gender:{
        type:String,
        required:true,
        enum:['Male','Female','Other'],
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital',
        required:true,
    }
},{timestamps:true});
export const Patient = mongoose.model('Patient',PatientSchema);