
import * as agentService from "../services/agent-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    console.log("review-controller: find");
    try {
        const params = { ...req.query };
        const agents = await agentService.search(params);
        setResponse(agents, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    console.log("review-controller: get");
    try {
        const id = req.params.id;
        const agent = await agentService.find(id);
        setResponse(agent, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}
