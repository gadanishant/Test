import Incident from "../models/incident.js";

export const search = async (params = {}) => {
    const incident = await Incident.find(params).exec();
    return incident;
}

export const save = async (newIncident) => {
    const incident = new Incident(newIncident);
    return await incident.save();
}

export const find = async (id) => {
    const incident = await Incident.findById(id).exec();
    return incident;
}

export const update = async (id, newIncident) => {
    const incident = await Incident.findByIdAndUpdate(id, newIncident, { new: true }).exec();
    return incident;
}

export const remove = async (id) => {
    const incident = await Incident.findByIdAndDelete(id).exec();
    return incident;
}