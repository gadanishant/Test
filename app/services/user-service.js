import UserModel from "../models/user.js";

export const search = async (params = {}) => {
    const user = await UserModel.find(params).exec();
    return user;
}

export const save = async (newUser) => {
    const user = new UserModel(newUser);
    return await user.save();
}

export const find = async (id) => {
    const user = await UserModel.findById(id).exec();
    return user;
}

export const update = async (id, newUser) => {
    const user = await UserModel.findByIdAndUpdate(id, newUser, { new: true }).exec();
    return user;
}

export const remove = async (id) => {
    const user = await UserModel.findByIdAndDelete(id).exec();
    return user;
}

export const findByUsername = async (username) => {
    const user = await UserModel.findByUsername(username);
    return user;
};