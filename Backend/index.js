import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { ObjectId, MongoClient } from 'mongodb';
import carmodel from "./models/car-model.js";

const app = express();
const dbName = 'rentar'; 
const url = `mongodb://root:1234@db:27017/${dbName}?authSource=admin`;
//const uri = mongoDBURL;
//const client = new MongoClient(uri);

app.get('/', (request, response) => {
    return response.status(234).send('Hello World mdfkr');
});

mongoose
.connect(url)
.then(()=>{
        console.log("Connected to db")
        const db = mongoose.connection.db;
        run().catch(console.dir);
        app.listen(PORT, ()=>{
            console.log(`App is listening to port : ${PORT}`);
        })  
        })
    .catch((error)=>{
        console.log(error)
    })

async function create (collection){
    try {   
        const car = {
            make:"BMW",
            model:"Serie 3",
            url:"https://i.postimg.cc/GpQ78j9m/bmw-serie-3.png",
            year:2024,
            seats:5,
            luggage:3,
            category:"Sport",
            price:89,
            rating:4.9,
            city:"Mar del Plata"
        }
        const result = await collection.insertOne(car)
        console.log(result);
    } catch (error) {
        console.warn(error)
    }
}

async function update (collection){
    try {   
        const filter = {
            make:"BMW",
        }

        const updatedFields = {
            $set: {
                year: 2020,
                price: 99,
                rating: 4.3
            }
        }
        const result = await collection.updateOne(filter, updatedFields);
        console.log(result);
    } catch (error) {
        console.warn(error)
    }
}

async function _delete (collection){
    try {   
        const filter = {
            make:'BMW'
        }
        const result = await collection.deleteOne(filter);
        console.log(result);
    } catch (error) {
        console.warn(error)
    }
}

async function request (collection){
    try {
        
    const query = { city: "Mar del Plata" };
    const options = {
        sort: { "make": 1 },
    };
    
    const result = await collection.find(query, options);
    const resultArray = await result.toArray();
    console.log(resultArray);

    } catch (error) {
        console.warn(error)
    }
}

async function run() {
    try {
        const car = {
            make:"Audi",
            model:"A4",
            url:"https://i.postimg.cc/GpQ78j9m/bmw-serie-3.png",
            year:2024,
            seats:5,
            luggage:3,
            category:"Sport",
            price:89,
            rating:4.9,
            city:"Mar del Plata"
        }

        const filter = {
            make:"Audi",
        }

        const updatedFields = {
            $set: {
                year: 2023,
                price: 99,
                rating: 4.7
            }
        }

        // CREATE
        //carmodel.createCar(car).then((result) => {console.log(result)})

        // REQUEST
        // carmodel.findCarByMake('Audi')
        // .then(result => {
        //     console.log('Resultado de la consulta: ', result);
        // })
        // .catch(error => {
        //     console.error('Error al ejecutar la consulta:', error);
        // });

        // UPDATE
        //carmodel.updateCar(filter, updatedFields).then((result) => {console.log(result)})

        // DELETE
        //carmodel.deleteCar(filter).then((result) => {console.log(result)})

    } catch (error){
        console.warn(error);
    }
}
