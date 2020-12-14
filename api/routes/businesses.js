const config = require('../config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const businessesController = require('../controllers/businessesController')

// Get All
router.get('/businesses', config.isAuthenticated, businessesController.list)

// Get One
router.get('/businesses/:id', config.isAuthenticated, businessesController.show)

// Get industry
router.get('/businesses/industry/:industry', config.isAuthenticated, businessesController.industry)

// Create
router.post('/businesses', config.isAuthenticated, businessesController.create)

// Delete
router.delete('/businesses/:id', config.isAuthenticated, businessesController.delete)

module.exports = router
