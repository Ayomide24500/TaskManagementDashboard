import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  getTasksById,
  updateTask,
} from "../controller/taskController";

const router: Router = Router();

router.route("/create-task/:projectID").post(createTask);
router.route("/get-task").get(getTasks);
router.route("/get-task/:taskId").get(getTasksById);
router.route("/update-task/:taskId").patch(updateTask);
router.route("/delete-task/:taskId").delete(deleteTask);

export default router;
