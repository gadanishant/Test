import express from 'express';
import * as propertyController from '../controllers/property-controller.js';

const router = express.Router();

router.route("/createNewProperty")
    .post(propertyController.post);

router.route("/getAllproperty")
    .get(propertyController.find);

router.route("/propertyDetails/:id")
    .get(propertyController.get)

router.route("/updateProperty/:id")
    .put(propertyController.put);

router.route("/deleteProperty/:id")
    .delete(propertyController.remove);

router.route("/getLikedUsers/:id")
    .get(propertyController.getLikedUsers);

export default router;