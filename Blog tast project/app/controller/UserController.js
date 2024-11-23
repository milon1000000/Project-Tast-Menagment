import { LoginService, registerService } from "../service/UserService.js"


export const register=async(req,res)=>{
    let result=await registerService(req);
    res.json(result)
}


export const login=async(req,res)=>{
    let result=await LoginService(req);
    res.json(result)
}