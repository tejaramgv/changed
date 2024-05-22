import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
      // const  conn=await mongoose.connect('mongodb+srv://Tejaram:Mongodb%40449@cluster0.rryadow.mongodb.net/game');
      //   console.log(conn.connection.host)
        const  conn=await mongoose.connect('mongodb+srv://webadmin:M0hbigit0zoROtLy@vaajlabs.tl4gqyb.mongodb.net/sitedata');
        console.log(conn.connection.host)
   }
   catch(e){
   console.log(e)
   }

}
export default connectDB