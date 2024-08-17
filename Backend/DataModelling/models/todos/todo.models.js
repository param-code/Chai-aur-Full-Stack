import mongoose from 'mongoose';
const TodoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    complete:{
        type:Boolean,
        required:true,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    ]
},{timestamps:true});
export const Todo = mongoose.model('Todo', TodoSchema);