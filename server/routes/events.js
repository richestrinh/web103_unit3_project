import express from 'express'
import getEvents from '../controllers/EventsController.js'


const router = express.Router()

router.get('/events', getEvents)

export default Router