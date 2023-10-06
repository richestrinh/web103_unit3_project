import express from 'express'

import LocationsController from '../controllers/locations.js'

const router = express.Router()

// Routes to get all locations, and locations by id
router.get('/', LocationsController.getLocations)
router.get('/:locationId', LocationsController.getLocationById)

export default router