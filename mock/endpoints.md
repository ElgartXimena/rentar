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
- *updateCityAddress*: cambiar la dirección de una sucursal
- *addCity*: agregar una sucursal
- *deleteCity*: eliminar una sucursal
- *findCities*: listar ciudades con sucursales

# booking-model
- *createBooking*: crear la reserva de un auto con fechas dadas
- *deleteBooking*: cancelar una reserva

# review-model
- *addReview*: agregar una review
- *deleteReview*: eliminar una review
- *updateReview*: editar una review (text y rating)

# user-model
- *addUser*: agregar un usuario
- *deleteUser*: eliminar un usuario
- *updateUser*: editar usuario (nombre, mail, password)