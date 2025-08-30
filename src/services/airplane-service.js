const { AirplaneRespository} = require('../repositories')

const airplaneRespository = new AirplaneRespository();

async function createAirplane(data){
    try {
        const airplane =  await AirplaneRespository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane
}