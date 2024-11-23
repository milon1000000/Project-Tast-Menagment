import TaskModel from "../models/TaskModels.js";
import UserModels from "../models/UserModels.js";
import EmailSend from "../utility/emailUtility.js";
import { EncodeToken } from "../utility/tokenUtility.js";
import { TokenEncode } from "./FeatureController.js";
export const Registration=async(req,res)=>{

    try{
        let reqBody=req.body;
        await UserModels.create(reqBody)
        return res.json({status:"Success","Message":"User Registration Successful"})

    }catch(err){
        return res.json({status:"fail","Message":err.toString()})

    }

    
    
 }
 
 
 export const Login=async(req,res)=>{

    let reqBody=req.body;
    let data=await UserModels.findOne(reqBody);
    if(data===null){
        return res.json({status:"fail","Message":"User Not found"})
    }else{
        let token=EncodeToken({email:data.email,_id:data._id});
        return res.json({status:"Success",token:token,"Message":"Users Login Successful",data:data})
    }
     
 }
 
 export const ProfileDetails=async(req,res)=>{
    try{
        let user_id=req.headers['user_id']
    let data=await UserModels.findOne({"id_":user_id})
    return res.json({status:"success","Message":"User ProfileDetails successful",data:data})
    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
        
    }
    // return res.json({status:"fail","Message":err.toString()})
 }
 
 
 export const ProfileUpdate=async(req,res)=>{
    
    try{
        let reqBody=req.body;
        let user_id=req.headers['user_id']
        console.log(user_id)
   await UserModels.updateOne({"id_":user_id},reqBody);
        return res.json({status:"success","Message":"User ProfileUpload Successful"})

    }catch(e){
        return res.json({status:"fail","Message":e.toString()})
    }

 }
 
 //     return res.json({status:"success","Message":"User EmailVerify Successful"})
 export const EmailVerify=async(req,res)=>{
    
     try{
        let email=req.params.email;
        let data=await UserModels.findOne({email:email})
         if(data===null){
            return res.json({status:"fail","Message":"Email dose not exist"})
         }else{
            let code=Math.floor(1000+Math.random()*900000);
            let EmailTo=data['email']
            let EmailText="Your code id "+code;
            let EmailSubject="The task manager verification code";
            await EmailSend(EmailTo,EmailText,EmailSubject)

            await UserModels.updateOne({email:email},{otp:code})
            return res.json({status:"success","Message":"User EmailVerify Successful"})
         }
   

     }catch(e){
        return res.json({status:"fail","message":e.toString()})

     }
 }



// export const EmailVerify=async(req,res)=>{
//     try {
//         let email=req.params.email;
//         let data=await UserModels.findOne({email: email})
//         console.log(data)
//         console.log(email)
//         if(data==null){
//             return res.json({status:"fail","Message":"User email does not exist"})
//         }
        
//         else {
//             let code=Math.floor(100000+Math.random()*900000)
//             let EmailTo= data['email'];
//             let EmailText= "Your Code is "+ code;
//             let EmailSubject= "Task Manager Verification Code"
//             await EmailSend(EmailTo, EmailText, EmailSubject)
 
//             await UserModels.updateOne({email: email},{otp:code})
//             return res.json({status:"success",Message:"Verification successfully,check email"})
//         }
//     }catch(err){
//         return res.json({status:"fail","Message":err.toString()})
//     }
 
//  }
 




 
 
 export const CodeVerify=async(req,res)=>{
   
   try{
    let email=req.params.email;
    let code=req.params.code;
    let data=await UserModels.findOne({email:email,otp:code});
    if(data===null){
        return res.json({status:"fail","Message":"wrong verification code"})
    }
     else{
        return res.json({status:"Success","Message":"User code verify Successful"})
     }
   }catch(e){
    return res.json({status:"fail","message":e.toString()})
   }
 }



// export const CodeVerify=async(req,res)=>{
//     try {
//         let email=req.params.email;
//         let code=req.params.code;

//         let data=await UserModels.findOne({email: email,otp:code})
//         if(data==null){
//             return res.json({status:"fail","Message":"Wrong Verification Code"})
//         }
//         else {
//             return res.json({status:"success","Message":"Verification successfully"})
//         }
//     }catch (e) {
//         return res.json({status:"fail","Message":err.toString()})
//     }
// }







 

//  export const ResetPassword=async(req,res)=>{
//     try{
//         let reqBody=req.body;
//         let data=await UserModels.findOne({email:reqBody["email"],otp:reqBody['code']})
//         if(data===null){
//             return res.json({status:"fail","message":"wrong verification code"})
//         }else{
//             await UserModels.updateOne({email:reqBody['email']},{
//                 otp:"0",password:reqBody['password']
//             })
//             return res.json({status:"Success","Message":"User ResetPassword Successful"})   
//         }
       
//     }
//     catch(e){
//         return res.json({status:"fail","Message":e.toString()})

//     }
    
// }



export const ResetPassword=async(req,res)=>{

    try {
        let reqBody=req.body;
        // let email=reqBody.email;
        // let otp=reqBody.otp;
        
        let data=await UserModels.findOne({email: reqBody['email'],otp:reqBody['otp']})
        // let data=await UserModels.findOne({email,otp})
        console.log(data)
        if(data==null){
            return res.json({status:"fail","Message":"Wrong Verification Code"})
        }
        else {
            await UserModels.updateOne({email: reqBody['email']},{
                otp:"0", password:reqBody['password'],
            })
            return res.json({status:"success","Message":"User ResetPassword successfully"})
        }
    }

    catch (err) {
        return res.json({status:"fail","Message":err.toString()})
    }

}