const express = require('express')
const router = express.Router()
const caloriesController = require('../controllers/calories') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, caloriesController.getCalories)

router.post('/createCalories', caloriesController.createCalories)

router.put('/markComplete', caloriesController.markComplete)

router.put('/markIncomplete', caloriesController.markIncomplete)

router.delete('/deleteCalories', caloriesController.deleteCalories)

module.exports = router