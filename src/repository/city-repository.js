//here we will write the code to interact with the database using the City model

const { City } = require("../models/index");

//here we will write the code to interact with the database using the City model
//we will create a class CityRepository which will have the following methods
//createCity:- to create a city in the database
//deleteCity:- to delete a city from the database
class CityRepository {
  //get all cities which exist here we used try catch for error handling
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw error;
    }
  }
  //delete cities which exist here we used try catch for error handling
  async deleteCity({ cityId }) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
