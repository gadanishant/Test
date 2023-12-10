import IncidentModel from "../models/incident.js";

export const search = async (params = {}) => {
    const incident = await IncidentModel.find(params).exec();
    return incident;
}

export const save = async (newIncident) => {
    const incident = new IncidentModel(newIncident);
    return await incident.save();
}

export const find = async (id) => {
    const incident = await IncidentModel.findById(id).exec();
    return incident;
}

export const findUserByUsername = async (param) => {
    const incident = await IncidentModel.findOne({ username: param }).exec();
    return incident;
}

export const update = async (id, newIncident) => {
    const incident = await IncidentModel.findByIdAndUpdate(id, newIncident, { new: true }).exec();
    return incident;
}

export const updateIncidentDetails = async (username, newIncident) => {
    console.log("incident-service: updateIncidentDetails");
    const incidentId = await IncidentModel.findOne({ Username: username }).exec();
    console.log("incident-service: username => ", username);
    console.log("incident-service: incidentId => ", incidentId.id);
    console.log("incident-service: newIncident => ", newIncident);
    const incident = await IncidentModel.findByIdAndUpdate(incidentId.id, newIncident, { new: true }).exec();
    console.log("incident-service: incident => ", incident);
    return incident;
}

export const remove = async (username) => {
    console.log("incident-service: remove");
    console.log("incident-service: username => ", username);
    const incidentId = await IncidentModel.findOne({ Username: username }).exec();
    const deleteId = incidentId.id;
    const incident = await IncidentModel.findByIdAndDelete(deleteId).exec();
    return incident;
}