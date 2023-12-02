import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
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
        type: Buffer,
        required: false
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
        required: false
    },
    food_preferences: {
        type: [String],
        required: true
    },
    pet_preferences: {
        type: [String],
        required: false
    },
},
{
    versionKey: false
});

const PersonModel = mongoose.model("Person", PersonSchema);

export default PersonModel;