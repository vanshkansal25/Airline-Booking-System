const express = require('express')


const router = express.Router();
const { InfoController } = require('../../controllers')

const {airplaneRoutes} = require('./airplane-routes')
const cityRoutes = require('./city-routes');
router.use('/airplanes',airplaneRoutes)
router.use('/cities', cityRoutes);
router.get("/health",InfoController.info)

module.exports = router;