// import StudentModel from "../../../app/models/StudentModel";
const StudentModel=require("../app/models/StudentModel.js")


exports.InsertStudent=(req,res)=>{
    let reqBody=req.body;
    StudentModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(201).json({status:"Success",data:data})
        }
    })
}