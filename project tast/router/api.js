import express from "express";
export const router=express.Router();
import * as UserController from "../app/controller/UserController.js"
import * as TaskController from "../app/controller/TaskController.js"
import AuthMiddleware from "../app/middleware/AuthMiddleware.js";


// import * as FeatureController from "../app/controller/FeatureController.js"

// User

router.post("/Registration",UserController.Registration)
router.post("/Login",UserController.Login)
router.get("/ProfileDetails",AuthMiddleware,UserController.ProfileDetails)
router.post("/ProfileUpdate",UserController.ProfileUpdate)
router.post("/EmailVerify",UserController.EmailVerify)
router.post("/CodeVerify",UserController.CodeVerify)
router.post("/ResetPassword",UserController.ResetPassword)


// Task

router.post("/CreateTask",TaskController.CountTask)
router.post("/UpdateTask",TaskController.UpdateTask)
router.post("/TaskListByStatus",TaskController.TaskListByStatus)
router.post("/DeleteTask",TaskController.DeleteTask)
router.post("/CountTask",TaskController.CountTask)



export default router