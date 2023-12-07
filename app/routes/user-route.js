import express from 'express';
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.route("/")
    .get(userController.find)
    .put(userController.updateUserDetails)
    .post(userController.post);

router.route("/:id")
    .get(userController.get)
    .put(userController.put)
    .delete(userController.remove);

export default router;