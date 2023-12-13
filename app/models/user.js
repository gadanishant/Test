import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
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
        required: true,
        unique: true
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
        type: String,
        enum: ["Vegetarian", "Non-vegetarian"],
        required: true
    },
    pet_preferences: {
        type: String,
        enum: ["Dogs", "Cats"],
        required: false
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    incidents: [
        {
            type: Schema.Types.ObjectId,
            ref: "Incident"
        }
    ],
    social_media: {
        linkedin: {
            type: String,
            required: false
        },
        instagram: {
            type: String,
            required: false
        }
    }
},
{
    versionKey: false
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;