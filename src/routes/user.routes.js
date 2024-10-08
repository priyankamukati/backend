import { Router } from "express";
import {
  changePassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUserAvatar,
  updateUserCoverImage,
  updateUserDetails,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/changePassword").post(verifyJWT, changePassword);
router.route("/getCurrentUser").get(verifyJWT, getCurrentUser);
router.route("/updateUserDetails").put(verifyJWT, updateUserDetails);
router.route("/updateUserAvatar").put(verifyJWT,upload.single("avatar"), updateUserAvatar);
router.route("/updateUserCoverImage").put(verifyJWT, upload.single("coverImage"),updateUserCoverImage);


export default router;
