import mongoose from 'mongoose';

const schema = mongoose.Schema;

const reviewSchema = new schema({
    user: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    text: { 
        type: String, 
        required: true },
    rating: { 
        type: Number, 
        required: true 
    },
});

const ReviewModel = mongoose.model('Review', reviewSchema);

export default ReviewModel;