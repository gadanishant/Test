import express from 'express';
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.route("/")
    .get(userController.find)
    .post(userController.post);

router.route("/username/:username")
    .get(userController.findUser)
    .put(userController.put)
    .delete(userController.remove);

router.route("/:id")
    .get(userController.get)
    .put(userController.put)
    .delete(userController.remove);

export default router;