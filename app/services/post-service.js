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

export const updatePost = async (username, newPost) => {
    console.log("post-service: updatePost");
    console.log("post-serice: username => ", username);
    console.log("post-serice: newPost => ", newPost);
    const postId = await PostModel.findOne({ username: username }).exec();
    console.log("post-serice: postId => ", postId._id);
    const post = await PostModel.findByIdAndUpdate(postId._id, newPost, { new: true }).exec();
    return post;
}

export const remove = async (username) => {
    console.log("post-service: remove");
    console.log("post-service: username => ", username);
    // const post = await PostModel.findByIdAndDelete(id).exec();
    const postId = await PostModel.findOne({ username: username }).exec();
    const deleteId = postId._id;
    console.log("post-service: deleteId => ", deleteId);
    const post = await PostModel.findByIdAndDelete(deleteId).exec();
    return post;
}