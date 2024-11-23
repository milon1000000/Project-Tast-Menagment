const mongoose=require('mongoose');


const DataSchema=mongoose.Schema(
    {
        Name:String,
        Roll:String,
        Class:String,
        Remarks:String
    }
)

const StudentModel=mongoose.model("users",DataSchema);
module.exports=StudentModel