import Property from "../models/property.js";

export const search = async (params = {}) => {
    const property = await Property.find(params).exec();
    return property;
}

export const save = async (newProperty) => {
    const property = new Property(newProperty);
    return await property.save();
}

export const find = async (id) => {
    const property = await Property.findById(id).exec();
    return property;
}

export const update = async (id, newProperty) => {
    const property = await Property.findByIdAndUpdate(id, newProperty, { new: true }).exec();
    return property;
}

export const remove = async (id) => {
    const property = await Property.findByIdAndDelete(id).exec();
    return property;
}