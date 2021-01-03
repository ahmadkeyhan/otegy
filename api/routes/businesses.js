const { Router } = require('express')

const router = Router()

// Initialize Controller
const businessesController = require('../controllers/businessesController')

// Get All
router.get('/businesses', businessesController.list)

// Get One
router.get('/businesses/:id', businessesController.show)

// Get industry
router.get('/businesses/industry/:industry', businessesController.industry)

// Create
router.post('/businesses', businessesController.create)

// Delete
router.delete('/businesses/:id', businessesController.delete)

module.exports = router
