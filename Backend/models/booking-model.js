const mongoose = require('mongoose');
const schema = mongoose.Schema;
const user = require('./user-model');
const car = require('./car-model');
const city = require('./city-model')

// user, car, datein, dateout, city, totalprice

const bookingSchema = new schema({
    user: { 
        type: schema.Types.ObjectId, 
        ref: user,
        required: true 
    },
    car: { 
        type: schema.Types.ObjectId,
        ref: car, 
        required: true 
    },
    city: { 
        type: schema.Types.ObjectId,
        ref: city, 
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

module.exports = mongoose.model('booking', bookingSchema);

//var BookingModel = mongoose.model('bookings', Booking);

export default {}