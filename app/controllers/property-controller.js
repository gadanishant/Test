import * as propertyService from "../services/property-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

// code to fetch the details of a property
export const find = async (req, res) => {
    try {
        const params = {...req.query};
        const apartments = await propertyService.search(params);
        apartments.unshift({ "count": apartments.length })
        setResponse(apartments, res);        
    } catch (error) {
        setErrorResponse(error, res);
    }
}

// code to post/create a new property
export const post = async (req, res) => {
    try {
        const newApartment = {...req.body};
        const apartment = await propertyService.save(newApartment);
        setResponse(apartment, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const apartment = await propertyService.find(id);
        setResponse(apartment, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = {...req.body};
        const apartment = await propertyService.update(id, updatedData);
        setResponse(apartment, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const apartment = await propertyService.remove(id);
        setResponse(apartment, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

// code to get the list of all the users who like a property
export const getLikedUsers = async (req, res) => {
    try {
        const id = req.params.id;
        const apartment = await propertyService.find(id);
        const likedUsers = apartment.liked_by;
        setResponse(likedUsers, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
} 
