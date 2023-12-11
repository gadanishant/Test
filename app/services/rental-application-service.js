import RentalApplicationModel from "../models/rental-application.js";

export const search = async (params = {}) => {
    const application = await RentalApplicationModel.find(params).exec();
    return application;
}

export const save = async (newApplication) => {
    const application = new RentalApplicationModel(newApplication);
    return await application.save();
}

export const find = async (id) => {
    const application = await RentalApplicationModel.findById(id).exec();
    return application;
}

export const updateRentalApplicationDetails = async (username, newApplication) => {
    const applicationId = await RentalApplicationModel.findOne({ username: username }).exec();
    console.log("updateRentalApplicationDetails: applicationId => ", applicationId);
    const rentalApplication = await RentalApplicationModel.findByIdAndUpdate(applicationId, newApplication, { new: true }).exec();
    return rentalApplication;
}

export const remove = async (id) => {
    const application = await RentalApplicationModel.findByIdAndDelete(id).exec();
    return application;
}