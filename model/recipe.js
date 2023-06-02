const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const recipeSchema = new mongoose.Schema({
  id: { type: String, default: () => uuid() },
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
});

const recipe = mongoose.model('recipe', recipeSchema);
module.exports = recipe;
