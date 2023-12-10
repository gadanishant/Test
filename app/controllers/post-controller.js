import * as postService from "../services/post-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";

export const find = async (req, res) => {
    try {
        const params = { ...req.query };
        const posts = await postService.search(params);
        console.log("count: ", posts.length);
        setResponse(posts, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const post = async (req, res) => {
    try {
        const newPost = { ...req.body };
        const post = await postService.save(newPost);
        setResponse(post, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
}

export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postService.find(id);
        setResponse(post, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postService.remove(id);
        setResponse(post, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}