import mongoose from 'mongoose';
const SubTodoSchema = new mongoose.Schema({
    content: {
        type:String,
        required: true,
    },
    complete:{
        type:Boolean,
        required:true,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        def:'User',
        required:true,
    }
}, { timestamps: true });
export const Subtodo = mongoose.model('SubTodo', SubTodoSchema);