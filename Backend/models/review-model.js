const mongoose = require('mongoose');
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

module.exports = mongoose.model('review', reviewSchema);

//var ReviewModel = mongoose.model('reviews', Review);

export default {}