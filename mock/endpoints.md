# car-model
- `/cars` 
  - **input**: { idCiudad: String, fechaIn: Date, fechaOut: Date }
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}]}
  - **findCars**: encontrar autos disponibles en una ciudad entre un rango de fechas
- `/cars/category`
  - **input**: { category: String } 
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}]}
  - **findCarsByCategory**: encontrar autos por category (sedan, suv, etc)
- `/cars/toprated`
  - **input**: { } 
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}] }
  - **findCarsByRate**: encontrar autos mejor rateados (seccion toprated)
- `/cars/make`
  - **input**: { make: String } 
  - **output**: { cars: [{datosAuto1}, {datosAuto2}, {datosAuto3}] }
  - **findCarsByMake**: encontrar autos por marca
- `/cars/add`
  - **input**: { car: Car } 
  - **output**: { response: String }
  - **addCar**: insertar un auto
- `/cars/addMany`
  - **input**: { [{car: Car}, {car: Car}, {car: Car}] } 
  - **output**: { response: String }
  - **addCars**: insertar varios autos
- `/cars/delete`
  - **input**: { carId: String } 
  - **output**: { response: String }
  - **deleteCar**: eliminar un auto
- `/cars/deleteMany`
  - **input**: { [{carId: String}, {carId: String}, {carId: String}] } 
  - **output**: { response: String }
  - **deleteCars**: eliminar varios autos
- `/cars/update`
  - **input**: { carId: String } 
  - **output**: { response: String}
  - **updateCar**: modificar un auto
- `/cars/updateMany`
  - **input**: { [{carId: String}, {carId: String}, {carId: String}] } 
  - **output**: { response: String}
  - **updateCars**: modificar varios autos 




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
- `/user/add`
  - **input**: { user: User } 
  - **output**: { response: String }
  - **addUser**: agregar un usuario
- `/user/delete`
  - **input**: { userId: String } 
  - **output**: { response: String }
  - **deleteUser**: eliminar un usuario
- `/user/update`
  - **input**: { user: User } 
  - **output**: { response: String }
  - **updateUser**: editar usuario (nombre, mail, password)

