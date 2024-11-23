// import mongoose, { version } from "mongoose";
import mongoose from "mongoose";

const DataSchema=mongoose.Schema(
    {
        email:{type:String,unique:true,require:true,lowercase:true},
        password:{type:String,require:true},
        fastName:{type:String,require:true},
        lastName:{type:String,require:true},
        phon:{type:String,require:true},
        img:{type:String,require:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
)


const UserModel=mongoose.model("monour",DataSchema);

export default UserModel