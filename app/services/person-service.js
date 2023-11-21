import PersonModel from "../models/person.js";

export const search = async (params = {}) => {
    const person = await PersonModel.find(params).exec();
    return person;
}

export const save = async (newPerson) => {
    const person = new PersonModel(newPerson);
    return await person.save();
}

export const find = async (id) => {
    const person = await PersonModel.findById(id).exec();
    return person;
}

export const update = async (id, newPerson) => {
    const person = await PersonModel.findByIdAndUpdate(id, newPerson, { new: true }).exec();
    return person;
}

export const remove = async (id) => {
    const person = await PersonModel.findByIdAndDelete(id).exec();
    return person;
}