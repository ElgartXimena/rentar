import { Router } from 'express';
import carCtrl from '../controllers/car-ctrl.js';
import cityCrl from '../controllers/city-crl.js';
import bookingCtrl from '../controllers/booking-ctrl.js';
import reviewCtrl from '../controllers/review-ctrl.js';
import userCtrl from '../controllers/user-ctrl.js';

const { findCars, findCarsByCategory, findTopRatedCars, findCarsByMake, addCars, deleteCar, updateCar } = carCtrl;
const { updateCityAddress, addCity, deleteCity, findCities } = cityCrl;
const { createBooking, deleteBooking, findBookings } = bookingCtrl;
const { addReview, deleteReview, updateReview, findReviews } = reviewCtrl;
const { addUser, deleteUser, updateUser } = userCtrl;

const router = Router()

//CARS ENDPOINTS
router.post('/cars', findCars);
router.get('/cars/category/:category', findCarsByCategory);
router.get('/cars/toprated', findTopRatedCars);
router.get('/cars/make/:make', findCarsByMake);
router.post('/cars/add', addCars);
router.delete('/cars/:id', deleteCar);
router.put('/cars', updateCar);

//CITIES ENDPOINTS
router.put('/cities', updateCityAddress);
router.post('/cities', addCity);
router.delete('/cities/:id', deleteCity);
router.get('/cities', findCities);

//BOOKING ENDPOINTS
router.post('/bookings', createBooking);
router.delete('/bookings/:id', deleteBooking);
router.get('/bookings/:user', findBookings);

//REVIEWS ENDPOINTS
router.post('/reviews', addReview);
router.delete('/reviews/:id', deleteReview);
router.put('/reviews', updateReview);
router.get('/reviews', findReviews);

//USER ENDPOINTS
router.post('/user', addUser);
router.delete('/user/:id', deleteUser);
router.put('/user', updateUser);

export default router;