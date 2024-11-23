import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema(
    {
        title:{type:String,require:true},
        description:{type:String,require:true},
        status:{type:true,String,require:true},
        user_id:{type:mongoose.Schema.Types.ObjectId,require:true}
    },
    {timestamps:true,versionKey:false}
)


export default mongoose.model("task",TaskSchema)