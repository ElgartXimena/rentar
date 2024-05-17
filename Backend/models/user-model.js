const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    birthdate: { 
        type: Date, 
        required: true 
    },
});

module.exports = mongoose.model('user', userSchema);

//var UserModel = mongoose.model('users', User);

export default {}