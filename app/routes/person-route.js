import express from 'express';
import * as personController from "../controllers/person-controller.js";

const router = express.Router();

router.route("/")
    .get(personController.find)
    .post(personController.post);

router.route("/:id")
    .get(personController.get)
    .put(personController.put)
    .delete(personController.remove);

export default router;