// init-mongo.js

db = db.getSiblingDB('rentar');

// Crea una colección llamada 'ejemplo' en la base de datos 'rentar'
db.ejemplo.insert({ mensaje: 'Hola, esta es una colección de ejemplo' });
