import ApartmentDetailsModel from "../models/apartment-details";

export const search = async (params = {}) => {
    const property = await Property.find(params).exec();
    return property;
}

export const save = async (newProperty) => {
    const property = new ApartmentDetailsModel(newProperty);
    return await property.save();
}

export const find = async (id) => {
    const property = await ApartmentDetailsModel.findById(id).exec();
    return property;
}

export const update = async (id, newProperty) => {
    const property = await ApartmentDetailsModel.findByIdAndUpdate(id, newProperty, { new: true }).exec();
    return property;
}

export const remove = async (id) => {
    const property = await ApartmentDetailsModel.findByIdAndDelete(id).exec();
    return property;
}
