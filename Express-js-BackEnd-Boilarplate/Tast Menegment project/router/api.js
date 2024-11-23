import express from "express";
export const router=express.Router();
import * as FeatureController from "../app/controller/FeatureController.js"
import * as UserController from "../app/controller/UserController.js"
import * as TaskController from "../app/controller/TaskController.js"
import AuthMiddleware from "../app/middleware/AuthMiddleware.js";

// router.get("/TokenEncode",FeatureController.TokenEncode)
// router.post("/TokenDecode",FeatureController.TokenDecode)


// User

router.post("/Registration",UserController.Registration)
router.post("/Login",UserController.Login)
router.get("/ProfileDetails",AuthMiddleware,UserController.ProfileDetails)
router.post("/ProfileUpdate",AuthMiddleware,UserController.ProfileUpdate)
router.get("/EmailVerify",UserController.EmailVerify)
router.post("/CodeVerify",UserController.CodeVerify)
router.post("/ResetPassword",UserController.ResetPassword)





//Task
router.post("/CreateTask",AuthMiddleware,TaskController.CreateTask)
router.get("/UpdateTask",AuthMiddleware,TaskController.UpdateTask)
router.get("/TaskListByStatus",AuthMiddleware,TaskController.TaskListByStatus)
router.get("/DeleteTask",AuthMiddleware,TaskController.DeleteTask)
router.get("/CountTask",AuthMiddleware,TaskController.CountTask)

export default router;