import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();
//toddo create krne ke phle hum authenticate krenge user ko
router.route("/").post(isAuthenticated,  createTodo);//send data
router.route("/").get(getAllTodos); //fetch data
router.route("/:todoId").put(isAuthenticated,updateTodo); //update data through todoId
router.route("/:todoId").delete(isAuthenticated,deleteTodo);
export default router;

//Jwt:= token ka mtlb hai ki jb tak token hai tb tak user login rahega jb token expire hoga to user logout ho jyega
//cookie-parser
//logout krte time cookie se token ko delete krenge