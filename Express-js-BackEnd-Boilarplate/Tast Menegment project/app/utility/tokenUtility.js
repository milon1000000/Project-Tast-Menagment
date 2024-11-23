import { json } from "express";
import { EMAIL_HOST, JWT_EXPIRATION_TIME,JWT_SECRETE } from "../config/config.js";
import jwt from "jsonwebtoken"



// export const EncodeToken=(email,user_id)=>{
//     const KEY=JWT_SECRETE;
//     const EXPIRE={expiresIn:JWT_EXPIRATION_TIME};
//     const PAYLOAD={email:email,user_id:user_id};
//     return jwt.sign(PAYLOAD,KEY,EXPIRE)
// }

export const EncodeToken=(email,user_id)=>{
    const KEY=JWT_SECRETE;
    const EXPIRE={expiresIn:JWT_EXPIRATION_TIME};
    const PAYLOAD={email:email,user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

// export const DecodeToken=(token)=>{
//     try{
//         return jwt.verify(token,JWT_SECRETE)
//     }catch(e){
//         return null;
//     }
// }

export const DecodeToken=(token)=>{
    try{
        return jwt.verify(token,JWT_SECRETE)
    }catch(e){
        return null
    }
}