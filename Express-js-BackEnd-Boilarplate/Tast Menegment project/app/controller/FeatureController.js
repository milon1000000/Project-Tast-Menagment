import { EncodeToken, DecodeToken} from "../utility/tokenUtility.js";
import * as path from "node:path"
import { toUSVString } from "node:util";


export const TokenEncode=async(req,res)=>{
    let result=EncodeToken("milonmondolmd33@gmail.com")
    res.json({token:result})
}



// export const TokenDecode=async(req,res)=>{
//     let result=DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbG9ubW9uZG9sMzNAZ21haWwuY29tIiwiaWF0IjoxNzMwOTM5NzE3LCJleHAiOjE3MzM1MzE3MTd9.KLacQzR1O4fMgduAumz8GUiOooB2SgbVJAeoZVOypcY");
//     res.json({token:result})

// }

export const TokenDecode=async(req,res)=>{
    let result=DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbG9ubW9uZG9sbWQzM0BnbWFpbC5jb20iLCJpYXQiOjE3MzE5MjY3MjYsImV4cCI6MTczNDUxODcyNn0.s93COKBei23XAAlkvJtmeXBVrMIRZ2dLJTYpOU38uHc");
    res.json({token:result})
}



export const Email=async(req,res)=>{
    let EmailTo=req.body.EmailTo;
    let EmailText=req.body.EmailText;
    let EmailSubject=req.body.EmailSubject;
    let EmailHTMLBody=req.body.EmailHTMLBody;
    let result=await EmailSend(EmailTo,EmailText,EmailSubject,EmailHTMLBody);
    res.json({emailStatus:result})
}



// fileUpload

// export const FileUpload=async(req,res)=>{
//     let myVideo=req.files['myVideo'];
//     let myfileName=myVideo.name;

//     let myFilePath=path.resolve(process.cwd(),'storage',myfileName)

//     myVideo.mv(myFilePath,function(err){
//         if(err){
//             res.json({status:"not Okk"})
//         }else{
//             res.json({status:"ok"})
//         }
//     })
// }

export const FileUpload=async(req,res)=>{
    let myVideo=req.files['myVideo'];
    let myFileName=myVideo.name;

    let myFilePath=path.resolve(process.cwd(),'storage',myFileName);
    myVideo.mv(myFilePath,function(err){
        if(err){
            res.json({status:"Not okk"})
        }else{
            res.json({status:"OK"})
        }
    })
}


export const Profile=async(req,res)=>{
    res.json({status:"OK"})
}


// cookie-parser

export const CreateCookies=async(req,res)=>{
    let cookieOptions={
        expires:new Date(Date.now()+3600*1000),httpOnly:true,sameSite:true,
    }
    let data="milonmondol33@gmail.com";
    let cookieName="mern07";
    res.cookie(cookieName,data,cookieOptions)
    res.json({status:"Ok"})
}


export const RemoveCookies=async(req,res)=>{
    let cookieOptions={
        expires:new Date(Date.now()-3600*1000),httpOnly:true,sameSite:true,
    }
    let data="";
    let cookieName="mern07";
    res.cookie(cookieName,data,cookieOptions)
    res.json({status:"Ok"})
}



// export const RemoveCookies=async(req,res)=>{
//     let cookieOptions={
//         expires:new Date(Date.now()-3600*1000),httpOnly:true,
//         sameSite:true,
//     }
//     let data="";
//     let cookieName="mern7";
//     res.cookie(cookieName,data,cookieOptions);
//     res.json({status:"OK"})
// }



// delete file




