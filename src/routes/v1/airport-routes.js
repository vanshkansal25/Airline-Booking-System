const express = require('express')

const { AirportMiddlewares } = require('../../middlewares')
const router = express.Router();
const { AirportController } = require('../../controllers')


router.post("/",
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport)


router.get("/",
    AirportController.getAirports)
router.get("/:id",
    AirportController.getAirport)
router.delete("/:id",
    AirportController.destroyAirport)
module.exports = router;