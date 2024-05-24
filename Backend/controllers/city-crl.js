import CityModel from "../models/city-model"

const updateCityAddress = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const updatedCity = await CityModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedCity) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.status(200).json(updatedCity);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const addCity = async (req, res) => {
  try {
    const newCity = new CityModel(req.body);
    const savedCity = await newCity.save();
    res.status(201).json(savedCity);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const deletedCity = await CityModel.findByIdAndDelete(id);
    if (!deletedCity) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.status(200).json({ message: 'City deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const findCities = async (req, res) => {
  try {
    const cities = await CityModel.find();
    if (cities.length === 0) {
      return res.status(404).json({ message: 'No cities found' });
    }
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export default {
    updateCityAddress,
    addCity,
    deleteCity,
    findCities
};