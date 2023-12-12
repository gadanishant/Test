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

export const updateIncidentDetails = async (id, newIncident) => {
    console.log("incident-service: updateIncidentDetails");
    const incident = await IncidentModel.findByIdAndUpdate(id, newIncident, { new: true }).exec();
    return incident;
}

export const remove = async (id) => {
    console.log("incident-service: remove");
    const incident = await IncidentModel.findByIdAndDelete(id).exec();
    return incident;
}