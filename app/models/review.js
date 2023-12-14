import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewer_name: {
        type: String,
        required: true
    },
    review_content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        emun: [1, 2, 3, 4, 5]
    }
},
{
    versionKey: false
});

const ReviewModel = mongoose.model("Review", ReviewSchema);

export default ReviewModel;
