import UserModel from "../models/UserModel.js";
import { EncodeToken } from "../utility/tokenUtility.js";


export const Registration=async(req,res)=>{

    try{
        let reqBody=req.body;
       await UserModel.create(reqBody)
      return res.json({status:"Successful","Message":"User Registration Successful"})

    }catch(err){
        return res.json({status:"fail","Message":err.toString()})

    }
 }


 


 export const Login=async(req,res)=>{
     try{
        let reqBody=req.body;
        let data=await UserModel.findOne(reqBody)
        if(data===null){
            return res.json({status:"fail","Message":" User Not found"})
        }else{
            let token=EncodeToken(data['email'],data["_id"])
            return res.json({status:"successful",Token:token,"Message":"User Login Successful"})
        }

     }catch(err){
        return res.json({status:"fail","Message":err.toString()})

     }
 }
 
 export const ProfileDetails=async(req,res)=>{

    try{
        let user_id=req.headers['user_id']
    let data=await UserModel.findOne({"_id":user_id})
     return res.json({status:"Successful","Message":"User ProfileDetails Successful",data:data})
    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
 }
 
 export const ProfileUpdate=async(req,res)=>{
     return res.json({status:"successful","Message":"User ProfileUpdate Successful"})
 }

 export const EmailVerify=async(req,res)=>{
    return res.json({status:"successful","Message":"User EmailVerify Successful"})
 }

 export const CodeVerify=async(req,res)=>{
    return res.json({status:"successful","Message":"User CodeVerify Successful"})
 }

 export const ResetPassword=async(req,res)=>{
    return res.json({status:"successful","Message":"User ResetPassword Successful"})
 }