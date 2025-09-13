const express = require('express')


const router = express.Router();
const { InfoController } = require('../../controllers')

const {airplaneRoutes} = require('./airplane-routes')
const cityRoutes = require('./city-routes');
const {airportRoutes} = require('./airport-routes')
const flightRoutes = require('./flight-routes')
router.use('/airplanes',airportRoutes)
router.use('/airport',airplaneRoutes)
router.use('/cities', cityRoutes);
router.use('/flights', flightRoutes);
router.get("/health",InfoController.info)

module.exports = router;