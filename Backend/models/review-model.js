import mongoose from 'mongoose'

const Review = mongoose.Schema(
    {
        user: { type: String, required: true },
        date: { type: String, required: true },
        text: { type: Date, required: true },
        rating: { type: Number, required: true }
    },
)

var ReviewModel = mongoose.model('reviews', Review);

export default {}