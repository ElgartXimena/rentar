import mongoose from 'mongoose'

const User = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        birthdate: { type: Date, required: true },
    },
)

var UserModel = mongoose.model('users', User);

export default {}