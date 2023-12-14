import IncidentModel from "../models/incident.js";
import * as incidentService from "../services/incident-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    console.log("incident-controller: find");
    try {
        const params = { ...req.query };
        const incidents = await incidentService.search(params);
        console.log("find: incidents => ", incidents);
        incidents.unshift({ "count": incidents.length })
        setResponse(incidents, res);
    } catch (error) {
        console.log("find: catch block");
        setErrorResponse(error, res);
    }
}

export const post = async (req, res) => {
    console.log("incident-controller: post");
    try {
        const newIncident = { ...req.body };
        const incident = await incidentService.save(newIncident);
        setResponse(incident, res);
    } catch (error) {
        console.log("post: catch block");
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    console.log("incident-controller: get");
    try {
        const id = req.params.id;
        const incident = await incidentService.find(id);
        setResponse(incident, res);
    } catch (err) {
        console.log("get: catch block");
        setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    console.log("incident-controller: put");
    try {
        const id = req.params.id;
        const updatedData = { ...req.body };
        const incident = await incidentService.update(id, updatedData);
        setResponse(incident, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const updateIncidentDetails = async (req, res) => {
    console.log("incident-controller: updateIncidentDetails");
    try {
        const incidentId = req.body.id;
        const updatedData = { ...req.body };
        const incident = await incidentService.updateIncidentDetails(incidentId, updatedData);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    console.log("incident-controller: remove");
    try {
        const incidentId = req.body.id;
        const incident = await incidentService.remove(incidentId);
        setResponse(incident, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const findById = async (req, res) => {
    try {
        const id = req.params.id;
        const incident = await IncidentModel.findById(id).exec();
        if (!incident) {
            res.status(404).send('Incident not found');
        } else {
            setResponse(incident, res);
        }
    } catch (error) {
        setErrorResponse(error, res);
    }
};