import express from "express";
export const router=express.Router();
import * as UserController from "../app/controller/UserController.js";
import * as BlogController from "../app/controller/BlogController.js"




router.post("/register",UserController.register)
router.post("/login",UserController.login)
router.post("/BlogCreate",BlogController.BlogCreate)
router.get("/allBlogService",BlogController.allBlogService)
router.get("/singleBlogService/:id",BlogController.singleBlogService)



export default router;