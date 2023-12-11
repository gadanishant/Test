import * as rentalApplicationService from "../services/rental-application-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    console.log("rental-application-controller: find");
    try {
        const params = { ...req.query };
        const applications = await rentalApplicationService.search(params);
        applications.push({"count": applications.length})
        setResponse(applications, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const post = async (req, res) => {
    console.log("rental-application-controller: post");
    try {
        const newApplication = { ...req.body };
        const application = await rentalApplicationService.save(newApplication);
        setResponse(application, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const updateRentalApplicationDetails = async (req, res) => {
    console.log("rental-application-controller: updateRentalApplicationDetails");
    try {
        const requestUsername = req.body.username
        const updatedData = { ...req.body };
        const application = await rentalApplicationService.updateRentalApplicationDetails(requestUsername, updatedData);
        setResponse(application, res);
        console.log("Update successful!");
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const get = async (req, res) => {
    console.log("rental-application-controller: get");
    try {
        const id = req.params.id;
        const application = await rentalApplicationService.find(id);
        setResponse(application, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    console.log("rental-application-controller: remove");
    try {
        console.log("req => ", req);
        const id = req.params.id;
        console.log("id => ", id);
        const application = await rentalApplicationService.remove(id);
        setResponse(application, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}