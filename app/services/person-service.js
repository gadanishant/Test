import PersonModel from "../models/person.js";

export const search = async (params = {}) => {
    const person = await PersonModel.find(params).exec();
    return person;
}

export const save = async (newProperty) => {
    const person = new PersonModel(newProperty);
    return await person.save();
}

export const find = async (id) => {
    const person = await PersonModel.findById(id).exec();
    return person;
}

export const update = async (id, newProperty) => {
    const person = await PersonModel.findByIdAndUpdate(id, newProperty, { new: true }).exec();
    return person;
}

export const remove = async (id) => {
    const person = await PersonModel.findByIdAndDelete(id).exec();
    return person;
}