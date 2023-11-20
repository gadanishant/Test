import express from 'express';
import * as propertyController from '../controllers/property-controller.js';

const router = express.Router();

router.route("/")
    .get(propertyController.find)
    .post(propertyController.post);

router.route("/:id")
    .get(propertyController.get)
    .put(propertyController.put)
    .delete(propertyController.remove);

export default router;