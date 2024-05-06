import mongoose from 'mongoose'

const Car = mongoose.Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        url: { type: String, required: true },
        year: { type: Number, required: true },
        seats: { type: Number, required: true },
        luggage: { type: Number, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true },
        city: { type: String, required: true },
    },
)

var CarModel = mongoose.model('cars', Car);
//El modelo CarModel está configurado para trabajar con la colección de MongoDB 
//llamada "cars" (MongoDB pluraliza automáticamente los nombres de las colecciones).

async function findCarByMake(name){
    try {
        return await CarModel.findOne({ make: name });
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error; // Re-lanza el error para manejarlo en otro lugar si es necesario
    }
} 

async function createCar(car){
    
    try {
        return await CarModel.create(car)
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error; // Re-lanza el error para manejarlo en otro lugar si es necesario
    }
}

async function updateCar(filter, updatedFields){
    
    try {
        return await CarModel.updateOne(filter, updatedFields)
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error; // Re-lanza el error para manejarlo en otro lugar si es necesario
    }
}

async function deleteCar(filter){
    
    try {
        return await CarModel.deleteOne(filter)
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error; // Re-lanza el error para manejarlo en otro lugar si es necesario
    }
}

export default {findCarByMake, createCar, updateCar, deleteCar}