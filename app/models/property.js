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
        building: {
            type: String,
            required: false
        },
        living_room: {
            type: String,
            required: false
        },
        bed_room: {
            type: String,
            required: false
        },
        kitchen: {
            type: String,
            required: false
        }
    } 
},
{
    versionKey: false
});

const PropertyModel = mongoose.model("Property", PropertySchema);

export default PropertyModel;
