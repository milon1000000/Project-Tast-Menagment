import mongoose from "mongoose";
import BlogModel from "../model/BlogModel.js";
 const {ObjectId}=mongoose.Types

export const blogService=async(req)=>{
    try{
        let reqBody=req.body;
        let data=await BlogModel.create(reqBody);
        return {status:"success",data:data}

    }catch(e){
        return {status:"error","Message":e.toString()}
    }
}




// allBlog
export const allBlog=async(req)=>{
    try{
        
        let data=await BlogModel.find();
        return {status:"success",data:data}

    }catch(e){
        return {status:"error","Message":e.toString()}
    }
}





export const singleBlog=async(req)=>{
    try{
        let id=new ObjectId(req.params.id)
        let data=await BlogModel.find({"_id":id})
        return {status:"success",data:data}

    }catch(e){
        return {status:"error","message":e.toString()}

    }
}