import express from 'express';
import * as reviewController from "../controllers/review-controller.js";

const router = express.Router();

router.route("/")
    .get(reviewController.find)

export default router;
