# car-model
- `/cars` `GET`
  - **input**: { idciudad: String, fechain: Date, fechaout: Date }
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}]}
  - **findCars**: encontrar autos disponibles en una ciudad entre un rango de fechas
- `/cars/:category` `GET`
  - **input**: { category: String } 
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}]}
  - **findCarsByCategory**: encontrar autos por category (sedan, suv, etc)
- `/cars/toprated` `GET`
  - **input**: { } 
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}] }
  - **findCarsByRate**: encontrar autos mejor rateados (seccion toprated)
- `/cars/:make` `GET`
  - **input**: { make: String } 
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}] }
  - **findCarsByMake**: encontrar autos por marca
- `/cars` `POST`
  - **input**: { [{car: Car}] } 
  - **output**: { response: String }
  - **addCar**: insertar un/varios auto/s
- `/cars` `DELETE`
  - **input**: { [{carid: String}] } 
  - **output**: { response: String }
  - **deleteCar**: eliminar un/varios auto/s
- `/cars` `PUT`
  - **input**: { [{carid: String}] } 
  - **output**: { response: String}
  - **updateCar**: modificar un/varios auto/s

# city-model
- `/cities` `PUT` 
  - **input**: { idcity: String, newAddress: String }
  - **output**: { response: Number }
  - **updateCityAddress**: cambiar la dirección de una sucursal
- `/cities` `POST`
  - **input**: { city: City } 
  - **output**: { response: String }
  - **addCity**: agregar una sucursal
- `/cities` `DELETE`
  - **input**: { idcity: String } 
  - **output**: { response: String }
  - **deleteCity**: eliminar una sucursal
- `/cities` `GET`
  - **input**: {  } 
  - **output**: { cities: [{datosCity1}, {datosCity2}] }
  - **findCities**: listar ciudades con sucursales

# booking-model
- `/bookings` `POST`
  - **input**: { booking: Booking } 
  - **output**: { response: String }
  - **createBooking**: crear la reserva de un auto con fechas dadas
- `/bookings` `DELETE`
  - **input**: { idbooking: String } 
  - **output**: { response: String }
  - **deleteBooking**: cancelar una reserva

# review-model
- `/reviews` `POST`
  - **input**: { review: Review } 
  - **output**: { response: String }
  - **addReview**: agregar una review
- `/reviews` `DELETE`
  - **input**: { idreview: String } 
  - **output**: { response: String }
  - **deleteReview**: eliminar una review
- `/reviews` `PUT`
  - **input**: { user: User } 
  - **output**: { response: String }
  - **updateReview**: editar una review (text y rating)
- `/reviews` `GET`
  - **input**: {  } 
  - **output**: { reviews: [{datosReview1}, {datosReview2}] }
  - **findReviews**: listar reviews de usuarios

# user-model
- `/user` `POST`
  - **input**: { user: User } 
  - **output**: { response: String }
  - **addUser**: agregar un usuario
- `/user` `DELETE`
  - **input**: { userid: String } 
  - **output**: { response: String }
  - **deleteUser**: eliminar un usuario
- `/user` `PUT`
  - **input**: { user: User } 
  - **output**: { response: String }
  - **updateUser**: editar usuario (nombre, mail, password)

