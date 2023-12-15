import express from 'express';
import * as agentController from "../controllers/agent-controller.js";

const router = express.Router();

router.route("/")
    .get(agentController.find)

router.route("/:id")
    .get(agentController.get)

export default router;
