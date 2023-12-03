import mongoose from "mongoose";

const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    neighbourhood: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    reporter: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    versionKey: false
});

const IncidentModel = mongoose.model("Incident", IncidentSchema);

export default IncidentModel;