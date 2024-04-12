import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

export default model('movies', Movie)