const CrudRepository = require('./crud-repository')
const {Flight} = require('../models')

class FlightRespository extends CrudRepository{
    constructor(){
        super(Flight);
    }
}

module.exports = FlightRespository