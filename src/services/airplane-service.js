const { AirplaneRespository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const airplaneRespository = new AirplaneRespository();
const {StatusCodes}= require('http-status-codes')
async function createAirplane(data){
    try {
        const airplane =  await airplaneRespository.create(data);
        return airplane;
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
       throw new AppError('Cannot create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
         
    }
}
async function getAirplanes(){
    try {
        const airplanes = await airplaneRespository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot Fetch data of all the airplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getAirplane(id){
    try {
        const airplanes = await airplaneRespository.get(id);
        return airplanes;
    } catch (error) {
        if(error.StatusCodes == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested does not exists',error.StatusCodes)
        }
        throw new AppError('Cannot Fetch data of all the airplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}