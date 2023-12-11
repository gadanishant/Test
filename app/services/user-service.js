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

export const findUserByUsername = async (param) => {
    const user = await UserModel.findOne({ username: param }).exec();
    return user;
}

export const findUserByIdentifier = async (identifier) => {
    const user = await UserModel.findOne({
        $or: [
            { username: identifier },
            { email: identifier }
        ]
    }).exec();

    return user;
}

export const update = async (id, newUser) => {
    const user = await UserModel.findByIdAndUpdate(id, newUser, { new: true }).exec();
    return user;
}

export const updateUserDetails = async (username, newUser) => {
    console.log("user-service: updateUserDetails");
    console.log("user-service: username => ", username);
    const userId = await UserModel.findOne({ username: username }).exec();
    console.log("user-service: userId => ", userId.id);
    const user = await UserModel.findByIdAndUpdate(userId, newUser, { new: true }).exec();
    return user;
}

export const remove = async (username) => {
    const userId = await UserModel.findOne({ username: username }).exec();
    const user = await UserModel.findByIdAndDelete(userId).exec();
    return user;
}