import { Router } from "express";
import {
  VerifyUser,
  createUser,
  getOneUser,
  getUser,
  signIn,
  updateOneUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/get-one-user/:userID").get(getOneUser);
router.route("/get").get(getUser);
router.route("/sign-up").post(createUser);

router.route("/sign-in-user").post(signIn);

router.route("/verify-user").patch(VerifyUser);
router.route("/update-user/:userID").patch(updateOneUser);

export default router;
