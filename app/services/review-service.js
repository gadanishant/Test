import ReviewModel from "../models/review.js";

export const search = async (params = {}) => {
    const reviews = await ReviewModel.find(params).exec();
    return reviews;
}

export const find = async (id) => {
    const review = await ReviewModel.findById(id).exec();
    return review;
}
