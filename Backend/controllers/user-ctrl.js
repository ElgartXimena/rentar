import UserModel from "../models/user-model.js";

const addUser = async (req, res) => {
    const newUser = req.body;
  
    try {
      let user = await UserModel.findOne({ email: newUser.email });
  
      if (user) {
        return res.status(200).json({ userId: user._id });
      }

      user = new UserModel(newUser);
      await user.save();
      return res.status(201).json({ userId: user._id });
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Validation error', error: err.message });
      }
      res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export default {
    addUser,
    deleteUser,
    updateUser
};