import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    food_preferences: {
        type: Number,
        required: true
    },
    pet_preferences: {
        type: Number
    },
},
{
    versionKey: false
});

const PersonModel = mongoose.model("Person", PersonSchema);

export default PersonModel;