import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
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
    media: {
        type: Buffer,
        required: false
    },
    location: {
        type: String,
        required: true
    },
},
{
    versionKey: false
});

const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;