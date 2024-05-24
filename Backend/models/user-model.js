import mongoose from 'mongoose';

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

const UserModel = mongoose.model('User', userSchema);

export default UserModel;