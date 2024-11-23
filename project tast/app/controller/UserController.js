import UserModel from "../models/UserModel.js";
import { EncodeToken } from "../utility/tokenUtility.js";


export const Registration=async(req,res)=>{

    try{
        let reqBody=req.body;
      await UserModel.create(reqBody)
      return res.json({status:"success","Message":"User Registration Successful"})

    }catch(err){
        return  res.json({status:"fail","Message":err.toString()})

    }
   

}


export const Login=async(req,res)=>{
    let reqBody=req.body;
    let data=await UserModel.findOne(reqBody);
    if(data===null){
        return res.json({status:"fail","Message":"User Not found"})
    }else{
        let token=EncodeToken((data["email",data["_id"]]));
        return res.json({status:"Success",Token:token,"Message":"Users Login Successful"})
    }

}

export const ProfileDetails=async(req,res)=>{
   
         
    

    // try{
    //     let user_id=req.headers['user_id']
    // let data=await UserModel.findOne({"id_":user_id})
    // return res.json({status:"success","Message":"User ProfileDetails successful",data:data})
    // }catch(err){
    //     return res.json({status:"fail","Message":err.toString()})
        
    // }

    try{
        let user_id=req.headers["user_id"]
        let data=await UserModel.findOne({"id_":user_id})
        return res.json({status:"successful","Message":"User ProfileDetails Successful",data:data})

    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
    
    
}

export const ProfileUpdate=async(req,res)=>{
    return res.json({status:"success","Message":"User ProfileUpdate Successful"})

}

export const EmailVerify=async(req,res)=>{
    return res.json({status:"success","Message":"User EmailVerify Successful"})

}


export const CodeVerify=async(req,res)=>{
    return res.json({status:"success","Message":"User CodeVerify Successful"})

}


export const ResetPassword=async(req,res)=>{
    return res.json({status:"success","Message":"User ResetPassword Successful"})

}