import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import router from "./routes/api.js";
import cors from 'cors';
const app = express();
const dbName = 'rentar'; 
const url = `mongodb://root:1234@db:27017/${dbName}?authSource=admin`;
//const uri = mongoDBURL;
//const client = new MongoClient(uri);

app.use(express.json());
app.use(cors());
app.use('/', router);


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

async function run() {
    try {

    } catch (error){
        console.warn(error);
    }
}
