import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RentalApplicationSchema = new Schema({
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
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true 
    },
    age: {
        type: Number,
        required: true
    },
    applicationDate: {
        type: Date,
        required: true
    },
    leaseStartDate: {
        type: Date,
        required: true
    },
    leaseEndDate: {
        type: Date,
        required: true
    },
    currentAddress: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    emergencyContact: {
        name: String,
        relationship: String,
        phone: String
    },
    dob: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Completed", "Cancelled"],
        default: "Pending"
    } 
},
    {
        versionKey: false
    });

const RentalApplicationModel = mongoose.model("RentalApplication", RentalApplicationSchema);

export default RentalApplicationModel;