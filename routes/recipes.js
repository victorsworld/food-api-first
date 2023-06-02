var express = require('express');
var router = express.Router();
const { createRecipe, } = require('../controller/recipecontroller');

router.post('/new-recipe', createRecipe);


module.exports = router;
