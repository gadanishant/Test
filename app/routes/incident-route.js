import express from 'express';
import * as incidentController from "../controllers/incident-controller.js";

const router = express.Router();

router.route("/")
    .get(incidentController.find)
    .put(incidentController.updateIncidentDetails)
    .post(incidentController.post)
    .delete(incidentController.remove);

router.route("/:id")
    .get(incidentController.findById);

export default router;