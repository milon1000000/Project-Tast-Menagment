import UserModel from "../model/UserModel.js"



export const registerService=async(req)=>{
    try{
        let reqBody=req.body;
        let data=await UserModel(reqBody);
        return{status:"Success",data:data}

    }catch(e){
        return {status:"error","Message":e.toString()}

    }


}


//LoginService
export const LoginService=async(req)=>{
    // console.log(req.body)
    try{
        let reqBody=req.body;
        let data=await UserModel.aggregate([
            {
                $match:reqBody,

            },
            {
                $project:{
                    _id:1,
                 email:1,
                }
            }
        ]);
        return{status:"Success",data:data}

    }catch(e){
        return {status:"error","Message":e.toString()}

    }


}