import mongoose from 'mongoose';
import UserModel from './user-model.js';
import CarModel from './car-model.js';
import CityModel from './city-model.js';

const schema = mongoose.Schema;

const bookingSchema = new schema({
    user: { 
        type: schema.Types.ObjectId, 
        ref: UserModel,
        required: true 
    },
    car: { 
        type: schema.Types.ObjectId,
        ref: CarModel, 
        required: true 
    },
    city: { 
        type: schema.Types.ObjectId,
        ref: CityModel, 
        required: true 
    },
    dateIn: { 
        type: Date, 
        required: true 
    },
    dateOut: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
});

const BookingModel = mongoose.model('Booking', bookingSchema);

export default BookingModel;