import PostModel from "../models/post.js";

export const search = async (params = {}) => {
    const post = await PostModel.find(params).exec();
    return post;
}

export const save = async (newPost) => {
    const post = new PostModel(newPost);
    return await post.save();
}

export const find = async (id) => {
    const post = await PostModel.findById(id).exec();
    return post;
}

export const remove = async (id) => {
    const post = await PostModel.findByIdAndDelete(id).exec();
    return post;
}