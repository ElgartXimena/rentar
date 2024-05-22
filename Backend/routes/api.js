import { Router } from 'express';
import carCtrl from '../controllers/car-ctrl.js';

const { findCars, findCarsByCategory, addCar, deleteCar, updateCar } = carCtrl;

const router = Router()

//CARS ENDPOINTS
router.get('/cars', findCars)
router.get('/cars/:category', findCarsByCategory)
// router.get('/cars/toprated', findCarsByRate)
// router.get('/cars/:make', findCarsByMake)
router.post('/cars', addCar)
router.delete('/cars', deleteCar)
router.put('/cars', updateCar)

//CITIES ENDPOINTS
// router.put('/cities', updateCityAddress)
// router.post('/cities', addCity)
// router.delete('/cities', deleteCity)
// router.get('/cities', findCities)

//BOOKING ENDPOINTS
// router.post('/bookings', createBooking)
// router.delete('/bookings/:idbooking', deleteBooking)

//REVIEWS ENDPOINTS
// router.post('/reviews', addReview)
// router.delete('/reviews/:idreview', deleteReview)
// router.put('/reviews', updateReview)
// router.get('/reviews', findReviews)

//USER ENDPOINTS
// router.post('/user', addUser)
// router.delete('/user/:userid', deleteUser)
// router.put('/user', updateUser)

export default router