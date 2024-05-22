import mongoose from 'mongoose'

const appliedSchema=new mongoose.Schema({
    mail:{
        type:String,
        required:true,
    },
    AppliedList:{
        type:Array
    }
   
},{timestamps:true})
export default mongoose.model('applied',appliedSchema)