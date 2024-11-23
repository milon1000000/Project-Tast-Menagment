
import {allBlog, blogService, singleBlog} from "../service/BlogService.js"


export const BlogCreate=async(req,res)=>{
    let result=await blogService(req)
   return res.json(result)
}



// allBlog

export const allBlogService=async(req,res)=>{
    let result=await allBlog(req)
   return res.json(result)
}


export const singleBlogService=async(req,res)=>{
    let result=await singleBlog(req);
    return res.json(result)
}

