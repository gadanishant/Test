import mongoose from "mongoose";

const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    mobile: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: false
    },
    incidentTitle: {
        type: String,
        required: true
    },
    incidentDescription: {
        type: String,
        required: false
    },
    incidentIntensity: {
        type: String,
        enum: ["Fatal", "Threatening", "Scary", "Manageable"],
        required: true
    },
    incidentLocation: {
        type: String,
        required: true
    },
    incidentDate: {
        type: Date,
        required: true
    },
    submissionDate: {
        type: Date,
        required: true
    },
},
    {
        versionKey: false
    });

const IncidentModel = mongoose.model("Incident", IncidentSchema);

export default IncidentModel;