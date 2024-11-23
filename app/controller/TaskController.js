import mongoose from "mongoose";
import TaskModel from "../models/TaskModels.js";

export const CreateTask=async(req,res)=>{
   
    try{

        let user_id=req.headers["user_id"]

        let reqBody=req.body;
     
        const taskData={...reqBody,user_id:user_id}
        console.log(taskData)

        await TaskModel.create(taskData)
        return res.json({status:"success","Message":"User CreateTaskStatus successful"})

    }catch(err){
        return res.json({status:"fail","Message":err.toString()})


    }
}

export const UpdateTaskStatus=async(req,res)=>{
    try{
        let id=req.params.id;
        let status=req.params.status;
        let user_id=req.headers["user_id"]
   

    await TaskModel.updateOne({"_id":id,"user_id":user_id},{
        status:status
        
        
    })
    
        return res.json({status:"success","Message":"User UpdateTaskStatus successful"})

    }catch(e){
        return res.json({status:"fail","Message":e.toString()})

    }
   
}


export const TaskListStatus=async(req,res)=>{
try{
    let status=req.params.status;
    let user_id=req.headers["user_id"]
let data=await TaskModel.find({"user_id":user_id,"status":status})

 return res.json({status:"success",data:data,"Message":"User TaskListStatus Successful"})
}catch(e){
    return res.json({status:"fail","Message":e.toString()})

}
   
}



 



export const DeleteTask=async(req,res)=>{
try{
    let id=req.params.id
   let user_id=req.headers["user_id"]
   await TaskModel.deleteOne({"_id":id,"user_id":user_id})

    return res.json({status:"success","Message":"Users DeleteTask Successful"})
}catch(e){

}
}


export const CountTask=async(req,res)=>{
    let ObjectId=mongoose.Types.ObjectId;
    let user_id=req.headers["user_id"]
    let user_id_Object=new ObjectId(user_id);
    let data=await TaskModel.aggregate([
        {$match:{user_id:user_id_Object}},
        {$group:{_id:"$status",sum:{$count:{}}}}
    ])
    return res.json({status:"success","Message":"User CountTask Successful",data:data})
}





