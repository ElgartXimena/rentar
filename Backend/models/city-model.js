import mongoose from 'mongoose'

const City = mongoose.Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
    },
)

var CityModel = mongoose.model('cities', City);

export default {}