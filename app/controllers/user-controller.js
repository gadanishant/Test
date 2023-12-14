import UserModel from "../models/user.js";
import * as userService from "../services/user-service.js";
import { setResponse, setErrorResponse, badRequest } from "./response-handler.js";

export const find = (req, res) => {
    if (req.query.id) {
        findById(req.query.id, res);
    } else if (req.query.username) {
        findByName(req.query.username, res);
    } else {
        getAllUsers(req, res);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.search();
        setResponse(users, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
};

const findById = async (id, res) => {
    try {
        const user = await UserModel.findById(id).exec();
        if (!user) {
            res.status(404).send('User not found');
        } else {
            setResponse(user, res);
        }
    } catch (error) {
        setErrorResponse(error, res);
    }
};

const findByName = async (name, res) => {
    try {
        const user = await UserModel.findOne({ username: name }).exec();
        if (!user) {
            res.status(404).send('User not found');
        } else {
            setResponse(user, res);
        }
    } catch (error) {
        setErrorResponse(error, res);
    }
};

export const post = async (req, res) => {
    console.log("user-controller: post");

    let requestUsername = req.body.username;
    const usernameFromDB = await UserModel.findOne({ username: requestUsername }).exec();

    if (usernameFromDB === null) {
        try {
            const newUser = { ...req.body };
            const user = await userService.save(newUser);
            setResponse(user, res);
        } catch (error) {
            console.log("post: catch block");
            setErrorResponse(error, res);
        }
    } else {
        console.log("Username Already Exists!");
        badRequest("Username Already Exists!", res);
    }
}

export const get = async (req, res) => {
    console.log("user-controller: get");
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
    console.log("user-controller: authenticateUser");
    const username = req.body.username;
    const requestPassword = req.body.password;

    try {
        const user = await userService.findUserByIdentifier(username);
        if (user && user.password === requestPassword) {
            setResponse(user, res);
            console.log("Authentication Successful!");
        } else {
            console.log("Authentication Failed!");
            res.status(401).json({
                code: "AuthenticationError",
                message: "Identifier or Password entered is incorrect"
            });
        }
    } catch (err) {
        console.log("Authentication Failed!");
        console.log("authenticateUser: catch block");
        setErrorResponse(err, res);
    }
}

export const put = async (req, res) => {
    console.log("user-controller: put");
    try {
        const id = req.params.id;
        const updatedData = { ...req.body };
        const user = await userService.update(id, updatedData);
        setResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const updateUserDetails = async (req, res) => {
    console.log("user-controller: updateUserDetails");
    // TODO: Don't allow user to modify username
    try {
        const requestUsername = req.body.username
        const updatedData = { ...req.body };
        const user = await userService.updateUserDetails(requestUsername, updatedData);
        setResponse(user, res);
        console.log("Update successful!");
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    console.log("user-controller: remove");
    try {
        const requestUsername = req.body.username
        const user = await userService.remove(requestUsername);
        setResponse(user, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}