import { DecodeToken } from "../utility/tokenUtility.js"


export default(req,res,next)=>{
    let token=req.headers['token']
    let decoded=DecodeToken(token)
    console.log(decoded)
    if(!decoded?.email?.email){
      return  res.status(401).send({status:"fail",message:"Unauthorized"})
    }else{
        let email=decoded?.email?.email;
        let user_id=decoded?.email?._id;


        // email use_id with header

        req.headers.email=email;
        req.headers.user_id=user_id;

        next()
    }
}