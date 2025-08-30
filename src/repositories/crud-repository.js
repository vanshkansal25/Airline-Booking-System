
const { where } = require('sequelize');
const {Logger} =  require('../config')

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const response = await this.model.create(data);
            return response; 
        } catch (error) {
            Logger.error("SOMETHING WENT WRONG IN CRUD REPO : CREATE");
            throw error; 
        }
    }
    async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response; 
        } catch (error) {
            Logger.error("SOMETHING WENT WRONG IN CRUD REPO : DESTROY ");
            throw error; 
        }
    }
    async get(data){
        try {
            const response = await this.model.findByPk({
                where:{
                    id:data
                }
            });
            return response; 
        } catch (error) {
            Logger.error("SOMETHING WENT WRONG IN CRUD REPO : GET ");
            throw error; 
        }
    }
    async getAll(){
        try {
            const response = await this.model.findAll({
                where:{
                    id:data
                }
            });
            return response; 
        } catch (error) {
            Logger.error("SOMETHING WENT WRONG IN CRUD REPO : GETALL ");
            throw error; 
        }
    }
    // data must be object in update functionality
    async update(id,data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response; 
        } catch (error) {
            Logger.error("SOMETHING WENT WRONG IN CRUD REPO : UPDATE ");
            throw error; 
        }
    }
}

module.exports = CrudRepository;