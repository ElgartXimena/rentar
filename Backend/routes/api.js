import { Router } from 'express';
import carCtrl from '../controllers/car-ctrl.js';
import cityCrl from '../controllers/city-crl.js';
import bookingCtrl from '../controllers/booking-ctrl.js';
import reviewCtrl from '../controllers/review-ctrl.js';
import userCtrl from '../controllers/user-ctrl.js';

const { findCars, findCarsByCategory, findTopRatedCars, findCarsByMake, addCar, deleteCar, updateCar } = carCtrl;
const { updateCityAddress, addCity, deleteCity, findCities } = cityCrl;
const { createBooking, deleteBooking, findBookings } = bookingCtrl;
const { addReview, deleteReview, updateReview, findReviews } = reviewCtrl;
const { addUser, deleteUser, updateUser } = userCtrl;

const router = Router()

//CARS ENDPOINTS
router.get('/cars', findCars);
router.get('/cars/:category', findCarsByCategory);
router.get('/cars/toprated', findTopRatedCars);
router.get('/cars/:make', findCarsByMake);
router.post('/cars', addCar);
router.delete('/cars/:idcar', deleteCar);
router.put('/cars', updateCar);

//CITIES ENDPOINTS
router.put('/cities', updateCityAddress);
router.post('/cities', addCity);
router.delete('/cities/:idcity', deleteCity);
router.get('/cities', findCities);

//BOOKING ENDPOINTS
router.post('/bookings', createBooking);
router.delete('/bookings/:idbooking', deleteBooking);
router.get('/bookings/:iduser', findBookings);

//REVIEWS ENDPOINTS
router.post('/reviews', addReview);
router.delete('/reviews/:idreview', deleteReview);
router.put('/reviews', updateReview);
router.get('/reviews', findReviews);

//USER ENDPOINTS
router.post('/user', addUser);
router.delete('/user/:userid', deleteUser);
router.put('/user', updateUser);

export default router;