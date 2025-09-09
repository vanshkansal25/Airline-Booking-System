const { AirportRespository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const airportRespository = new AirportRespository();
const {StatusCodes}= require('http-status-codes')
async function createAirport(data){
    try {
        const airport =  await airportRespository.create(data);
        return airport;
    } catch (error) {
        // if(error == 'TypeError'){
        //     throw new AppError('Cannot create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
        // }
        if(error == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err); 
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST  )
        }
       throw new AppError('Cannot create a new airport object',StatusCodes.INTERNAL_SERVER_ERROR)
         
    }
}
async function getAirports(){
    try {
        const airports = await airportRespository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot Fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAirport(id){
    try {
        const airports = await airportRespository.get(id);
        return airports;
    } catch (error) {
         throw new AppError('Cannot Fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function destroyAirport(id){
    try {
        const response = await airportRespository.destroy(id);
        return response;
    } catch (error) {
        if(error.StatusCodes == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to delete does not exists',error.StatusCodes)
        }
        throw new AppError('Cannot Fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

//TODO: CREATE UPDATE API
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}