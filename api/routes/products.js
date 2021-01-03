const { Router } = require('express')

const router = Router()

// Initialize Controller
const productsController = require('../controllers/productsController')

// Get All
router.get('/products', productsController.list)

// Get One
router.get('/products/:id', productsController.show)

// Get type
router.get('/products/type/:type', productsController.type)

// Get project
router.get('/products/project/:project', productsController.project)

// Create
router.post('/products', productsController.create)

// Delete
router.delete('/products/:id', productsController.delete)

module.exports = router
