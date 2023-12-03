import express from 'express';
import * as incidentController from '../controllers/incident-controller.js';

const router = express.Router();

router.route("/")
    .get(incidentController.find)
    .post(incidentController.post);

router.route("/:id")
    .get(incidentController.get)
    .put(incidentController.put)
    .delete(incidentController.remove);

export default router;