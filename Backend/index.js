import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { ObjectId, MongoClient } from 'mongodb';

const app = express();
const dbName = 'rentar'; 
const uri = mongoDBURL;
const client = new MongoClient(uri);

app.get('/', (request, response) => {
    return response.status(234).send('Hello World mdfkr');
});

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
        await client.connect();
        const database = client.db(dbName);
        const cars = database.collection("car");
        app.listen(PORT, ()=>{
            console.log(`App is listening to port : ${PORT}`);
        });    

        //await create(cars);
        //await request(cars);
        //await update(cars);
        await _delete(cars);

    } catch (error){
        console.warn(error);
    }
}
run().catch(console.dir);