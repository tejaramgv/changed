import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    phoneno:{
        type:Number,
        required:true,
    },
   feedback :{
        type:String,
        required:true
    }
},{timestamps:true})
export default mongoose.model('feedback',userSchema)