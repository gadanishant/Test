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
        const postId = req.body.id;
        const updatedData = { ...req.body };
        const post = await postService.updatePost(postId, updatedData);
        setResponse("Update successful!", res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}

export const remove = async (req, res) => {
    console.log("post-controller: remove");
    try {
        const postId = req.body.id;
        const post = await postService.remove(postId);
        setResponse("Post deleted successfully!", res);
    } catch (err) {
        setErrorResponse(err, res);
    }
}