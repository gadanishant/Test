import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    id: {
        type: String,
        required: true
    },
    agent: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Agent',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    zip_code: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    year_built: {
        type: Number,
        required: true
    },
    year_remodeled: {
        type: Number
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    liked_by: {
        type: [String],
        default: []
    },
    images: {
        type: [String],
        default: []
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    move_in: {
        type: Date,
        required: true
    },
    in_unit_laundary: {
        type: Boolean,
        required: true
    },
    facilities: {
        type: [String],
    }
},
{
    versionKey: false
});

const PropertyModel = mongoose.model("Property", PropertySchema);

export default PropertyModel;
