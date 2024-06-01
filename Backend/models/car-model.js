import mongoose from 'mongoose';

const schema = mongoose.Schema;

const carSchema = new schema({
    make: { 
        type: String, 
        required: true 
    },
    model: { 
        type: String, 
        required: true 
    },
    url: { 
        type: String, 
        required: true 
    },
    year: { 
        type: Number, 
        required: true 
    },
    seats: { 
        type: Number, 
        required: true 
    },
    luggage: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    transmission: {
        type: String,
        requiered: true
    },
    price: { 
        type: Number, 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
});

const CarModel = mongoose.model('Car', carSchema);

export default CarModel;