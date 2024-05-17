const mongoose = require('mongoose');
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

module.exports = mongoose.model('city', citySchema);

//var CityModel = mongoose.model('cities', City);

export default {}