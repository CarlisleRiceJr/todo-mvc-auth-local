const mongoose = require('mongoose')

const CalorieSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Calorie', CalorieSchema)
