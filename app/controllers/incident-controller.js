import * as incidentService from "../services/incident-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    try {
        const params = {...req.query};
        const incidents = await incidentService.search(params);
        setResponse(apartments, res);        
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const post = async (req, res) => {
    try {
        const newIncident = {...req.body};
        const incident = await incidentService.save(newIncident);
        setResponse(incident, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const incident = await incidentService.find(id);
        setResponse(incident, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = {...req.body};
        const incident = await incidentService.update(id, updatedData);
        setResponse(incident, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const incident = await incidentService.remove(id);
        setResponse(incident, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}