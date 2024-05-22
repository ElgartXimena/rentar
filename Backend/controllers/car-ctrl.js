import CarModel from "../models/car-model.js"

const findCars = async (req, res) => {
  try {
    const cars = await CarModel.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findCarsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const cars = await CarModel.find({ category });
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addCar = async (req, res) => {
  try {
    const newCar = new CarModel(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedCar = await CarModel.findByIdAndDelete(id);
    if (!deletedCar) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    const updatedCar = await CarModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedCar) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json(updatedCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
    findCars,
    findCarsByCategory,
    addCar,
    deleteCar,
    updateCar
};