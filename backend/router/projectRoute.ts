import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjectById,
  updateProject,
} from "../controller/projectController";

const router: Router = Router();

router.route("/create-project").post(createProject);
router.route("/get-project").get(getProject);
router.route("/get-project/:projectID").post(getProjectById);
router.route("/delete-project/:projectID").delete(deleteProject);
router.route("/update-project/:projectID").patch(updateProject);

export default router;
