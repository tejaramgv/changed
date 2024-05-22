import mongoose from 'mongoose'

const countSchema=new mongoose.Schema({
    count:{
        type:Number,
        required:true,
    },
    id:{
        type:Number
    }
   
},{timestamps:true})
export default mongoose.model('count',countSchema)