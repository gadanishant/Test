import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AgentSchema = new Schema({
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
    description: {
        type: String,
        required: false
    },
    listings: [
        {
            type: Schema.Types.ObjectId,
            ref: "Property"
        }
    ]
},
{
    versionKey: false
});

const AgentModel = mongoose.model("Agent", AgentSchema);

export default AgentModel;