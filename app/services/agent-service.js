import AgentModel from "../models/agent.js";

export const search = async (params = {}) => {
    const reviews = await AgentModel.find(params).exec();
    return reviews;
}

export const find = async (id) => {
    const review = await AgentModel.findById(id).exec();
    return review;
}
