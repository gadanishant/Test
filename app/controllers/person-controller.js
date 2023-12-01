import* as personService from "../services/person-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    try {
        const params = {...req.query};
        const apartments = await personService.search(params);
        setResponse(apartments, res);        
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const post = async (req, res) => {
    try {
        const newApartment = {...req.body};
        const apartment = await personService.save(newApartment);
        setResponse(apartment, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const apartment = await personService.find(id);
        setResponse(apartment, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = {...req.body};
        const apartment = await personService.update(id, updatedData);
        setResponse(apartment, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const apartment = await personService.remove(id);
        setResponse(apartment, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}
