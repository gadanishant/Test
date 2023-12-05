import * as userService from "../services/user-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    try {
        const params = { ...req.query };
        const users = await userService.search(params);
        setResponse(users, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const post = async (req, res) => {
    try {
        const newUser = { ...req.body };
        const user = await userService.save(newUser);
        setResponse(user, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    console.log("get");
    try {
        const id = req.params.id;
        const user = await userService.find(id);
        setResponse(user, res);
    } catch (err) {
        console.log("get: catch block");
        setErrorResponse(err, res);
    }
}

export const authenticateUser = async (req, res) => {
    const requestUsername = req.body.username
    const requestPassword = req.body.password

    try {
        const user = await userService.findUserByUsername(requestUsername);
        if (user.username === requestUsername && user.password === requestPassword) {
            setResponse(user, res);
            console.log("Authentication Successful!");
        } else {
            console.log("Authentication Failed!");
            res.status(401).json({
                code: "AuthenticationError",
                message: "Username or Password entered is incorrect"
            });
        }
    } catch (err) {
        console.log("Authentication Failed!");
        console.log("authenticateUser: catch block");
        setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = { ...req.body };
        const user = await userService.update(id, updatedData);
        setResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.remove(id);
        setResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}