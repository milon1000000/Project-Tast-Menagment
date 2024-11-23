import mongoose from "mongoose";

export const TaskSchema=mongoose.Schema(
    {
        title:{type:String,require:true},
        description:{type:String,require:true},
        status:{type:String,require:true},
        user_id:{type:mongoose.Schema.Types.ObjectId,require:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

export default mongoose.model("Task",TaskSchema)