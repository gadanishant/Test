import PostModel from "../models/post.js";

export const search = async (params = {}) => {
    console.log("post-service: search");
    const post = await PostModel.find(params).exec();
    return post;
}

export const save = async (newPost) => {
    console.log("post-service: save");
    const post = new PostModel(newPost);
    return await post.save();
}

export const find = async (id) => {
    console.log("post-service: find");
    const post = await PostModel.findById(id).exec();
    return post;
}

export const updatePost = async (id, newPost) => {
    const post = await PostModel.findByIdAndUpdate(id, newPost, { new: true }).exec();
    return post;
}

export const remove = async (id) => {
    const post = await PostModel.findByIdAndDelete(id).exec();
    return post;
}