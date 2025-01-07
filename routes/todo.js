import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo.js";

const router = express.Router();

router.route("/").post(createTodo);//send data
router.route("/").get(getAllTodos); //fetch data
router.route("/:todoId").put(updateTodo); //update data through todoId
router.route("/:todoId").delete(deleteTodo);
export default router;

//Jwt:= token ka mtlb hai ki jb tak token hai tb tak user login rahega jb token expire hoga to user logout ho jyega
//cookie-parser