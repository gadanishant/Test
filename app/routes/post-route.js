import express from 'express';
import * as postController from "../controllers/post-controller.js";

const router = express.Router();

router.route("/")
    .get(postController.find)
    .post(postController.post);

export default router;