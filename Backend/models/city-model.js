import mongoose from 'mongoose';

const schema = mongoose.Schema;

const citySchema = new schema({
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
});

const CityModel = mongoose.model('City', citySchema);

export default CityModel;