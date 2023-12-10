import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ApartmentDetailsSchema = new Schema({
    no_of_rooms: {
        type: String,
        required: true
    },
    no_of_bathrooms: {
        type: String,
        required: true
    },
    balcony_included: {
        type: Boolean,
        required: true
    },
    type_of_apartment: [{
        type: String,
        required: true
    }],
    images: [{
        type: String,
    }]
},
{
    versionKey: false
});

const ApartmentDetailsModel = mongoose.model("ApartmentDetails", ApartmentDetailsSchema);

export default ApartmentDetailsModel;
