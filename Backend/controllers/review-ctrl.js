import ReviewModel from "../models/review-model.js";

const addReview = async (req, res) => {
  try {
    const newReview = new ReviewModel(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const deletedReview = await ReviewModel.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const updatedReview = await ReviewModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(updatedReview);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const findReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    if (reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found' });
    }
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export default {
    addReview,
    deleteReview,
    updateReview,
    findReviews
};