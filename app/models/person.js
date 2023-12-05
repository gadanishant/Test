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
    }
},
{
    versionKey: false
});

<<<<<<< Updated upstream:app/models/person.js
const PersonModel = mongoose.model("Person", PersonSchema);
=======
UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username: username }).exec();
};

const UserModel = mongoose.model("User", UserSchema);
>>>>>>> Stashed changes:app/models/user.js

export default PersonModel;