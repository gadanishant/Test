import * as reviewService from "../services/review-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    console.log("review-controller: find");
    try {
        const params = { ...req.query };
        const reviews = await reviewService.search(params);
        setResponse(reviews, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    console.log("review-controller: get");
    try {
        const id = req.params.id;
        const review = await reviewService.find(id);
        setResponse(review, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}
