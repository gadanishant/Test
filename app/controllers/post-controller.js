import * as postService from "../services/post-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    console.log("post-controller: find");
    try {
        const params = { ...req.query };
        const posts = await postService.search(params);
        posts.unshift({ "count": posts.length })
        setResponse(posts, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const post = async (req, res) => {
    console.log("post-controller: post");
    try {
        const newPost = { ...req.body };
        const post = await postService.save(newPost);
        setResponse(post, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    console.log("post-controller: get");
    try {
        const id = req.params.id;
        const post = await postService.find(id);
        setResponse(post, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const updatePost = async (req, res) => {
    console.log("post-controller: updatePost");
    try {
        const requestUsername = req.body.username
        const updatedData = { ...req.body };

        console.log("requestUsername => ", requestUsername);
        console.log("updatedData => ", updatedData);
        
        const user = await postService.updatePost(requestUsername, updatedData);
        setResponse("Update successful!", res);
        console.log("Update successful!");
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    console.log("post-controller: remove");
    try {
        const requestUsername = req.body.username
        const post = await postService.remove(requestUsername);
        setResponse("Post deleted successfully!", res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}