import CarModel from "../models/car-model.js"
import BookingModel from "../models/booking-model.js";
import CityModel from "../models/city-model.js";

const findCars = async (req, res) => {
  try {
    const { city, startDate, endDate } = req.body;
    if (!city || !startDate || !endDate) {
      return res.status(400).json({ message: 'City, startDate, and endDate are required' });
    }

    // Convertir fechas a Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Encontrar reservas que se superpongan con las fechas proporcionadas en la ciudad especificada
    const bookings = await BookingModel.find({
      city: city,
      $or: [
        { dateIn: { $lte: end }, dateOut: { $gte: start } },
      ],
    });

    // Obtener IDs de autos reservados
    const reservedCarIds = bookings.map(booking => booking.car);
    //En el body se pasa el id de la city. Este es usado para buscar en los bookings, pero para el CarModel es necesario el Name
    const city_name = await CityModel.findById(city)
    
    // Encontrar autos en la ciudad que no estén reservados en el rango de fechas
    const availableCars = await CarModel.find({
      city: city_name.name,
      _id: { $nin: reservedCarIds },
    });

    res.status(200).json(availableCars);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const findCarsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const cars = await CarModel.find({ category });
    if (cars.length === 0) {
      return res.status(404).json({ message: `No cars found in category ${category}` });
    }
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const findTopRatedCars = async (req, res) => {
  try {
    const topRatedCars = await CarModel.find().sort({ rating: -1 }).limit(10);
    if (topRatedCars.length === 0) {
      return res.status(404).json({ message: 'No cars found' });
    }
    res.status(200).json(topRatedCars);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const findCarsByMake = async (req, res) => {
  try {
    const { make } = req.params;
    const cars = await CarModel.find({ make });
    if (cars.length === 0) {
      return res.status(404).json({ message: `No cars found with the make ${make}` });
    }
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const addCar = async (req, res) => {
  try {
    const newCar = new CarModel(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const deletedCar = await CarModel.findByIdAndDelete(id);
    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const updatedCar = await CarModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(updatedCar);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export default {
    findCars,
    findCarsByCategory,
    findTopRatedCars,
    findCarsByMake,
    addCar,
    deleteCar,
    updateCar
};