import mongoose from "mongoose";

export const UserSchema=new mongoose.Schema(
    {
        email:{type:String,unique:true,require:true},
        fastName:{type:String,unique:true,require:true},
        lastName:{type:String,unique:true,require:true},
        password:{type:String,require:true},
        mobile:{type:String,require:true},
        otp:{type:String,default:0}
    },
    {
        timestamps:true,
        versionKey:false
    }
)


export default mongoose.model("milonmilonmilon",UserSchema)