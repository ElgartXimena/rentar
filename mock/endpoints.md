# car-model
- `/cars` 
  - **input**: { idCiudad, fechaIn, fechaOut }
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}]}
  - **findCars**: encontrar autos disponibles en una ciudad entre un rango de fechas
- *findCarsByCategory*: encontrar un auto por category (sedan, suv, etc)
- *findCarsByRate*: encontrar autos mejor rateados (seccion toprated)
- *findCarsByMake*: encontrar autos por marca
- *orderCars*: ordenar autos (Price high to low, low to high, top rated first)
- *addCar*: insertar un auto
- *addCars*: insertar varios autos
- *deleteCar*: eliminar un auto
- *deleteCars*: eliminar varios autos
- *updateCar*: modificar un auto
- *updateCars*: modificar varios autos 

# city-model
- `/cities/update` 
  - **input**: { idCity: String, newAddress: String }
  - **output**: { response: Number }
  - **updateCityAddress**: cambiar la dirección de una sucursal
- `/cities/create`
  - **input**: { city: City } 
  - **output**: { response: String }
  - **addCity**: agregar una sucursal
- `/cities/delete`
  - **input**: { idCity: String } 
  - **output**: { response: String }
  - **deleteCity**: eliminar una sucursal
- `/cities`
  - **input**: {  } 
  - **output**: { cities: [{datosCity1}, {datosCity2}] }
  - **findCities**: listar ciudades con sucursales

# booking-model
- `/bookings/create`
  - **input**: { booking: Booking } 
  - **output**: { response: String }
  - **createBooking**: crear la reserva de un auto con fechas dadas
- `/bookings/delete`
  - **input**: { idBooking: String } 
  - **output**: { response: String }
  - **deleteBooking**: cancelar una reserva

# review-model
- `/reviews/create`
  - **input**: { review: Review } 
  - **output**: { response: String }
  - **addReview**: agregar una review
- `/reviews/delete`
  - **input**: { idReview: String } 
  - **output**: { response: String }
  - **deleteReview**: eliminar una review
- `/reviews/update`
  - **input**: { user: User } 
  - **output**: { response: String }
  - **updateReview**: editar una review (text y rating)
- `/reviews`
  - **input**: {  } 
  - **output**: { reviews: [{datosReview1}, {datosReview2}] }

# user-model
- *addUser*: agregar un usuario
- *deleteUser*: eliminar un usuario
- *updateUser*: editar usuario (nombre, mail, password)