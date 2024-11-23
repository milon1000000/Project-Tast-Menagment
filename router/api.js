import express from "express";
export const router=express.Router();
import * as FeatureController from "../app/controller/FeatureController.js";

import * as TaskController from "../app/controller/TaskController.js"
import * as UsersController from "../app/controller/UsersControllers.js"
import authMiddleware from "../app/middleware/authMiddleware.js";





router.post("/Registration",UsersController.Registration);
router.post("/Login",UsersController.Login)
router.get("/ProfileDetails",authMiddleware, UsersController.ProfileDetails)
router.post("/ProfileUpdate",authMiddleware,UsersController.ProfileUpdate)
router.get("/EmailVerify/:email",UsersController.EmailVerify)
router.get("/CodeVerify/:email/:code",UsersController.CodeVerify)
router.post("/ResetPassword",authMiddleware,UsersController.ResetPassword)


// TaskController       

router.post("/CreateTask",authMiddleware,TaskController.CreateTask)
router.put("/UpdateTaskStatus/:id/:status",authMiddleware,TaskController.UpdateTaskStatus)
router.get("/TaskListStatus/:status",authMiddleware,TaskController.TaskListStatus)
router.get("/DeleteTask/:id",authMiddleware,TaskController.DeleteTask)
router.get("/CountTask",authMiddleware,TaskController.CountTask)


export default router;

