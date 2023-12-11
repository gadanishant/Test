import express from 'express';
import * as rentalApplicationController from "../controllers/rental-application-controller.js";

const router = express.Router();

router.route("/")
    .get(rentalApplicationController.find)
    .put(rentalApplicationController.updateRentalApplicationDetails) //657266902024186d3a158e1d
    .post(rentalApplicationController.post)

router.route("/:id")
    .delete(rentalApplicationController.remove);

export default router;