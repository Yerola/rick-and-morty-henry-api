const axios = require('axios');
const { Character } = require('../DB_connection');

const getApiData = async () => {
  try {
    let allCharactersInfoApi = [];
    for (let i = 1; i < 6; i++) {
      const apiData = await axios(`http://rickandmortyapi.com/api/character?page=${i}`);
      allCharactersInfoApi.push(apiData);
    }
    allCharactersInfoApi = await Promise.all(allCharactersInfoApi);
    let allCharactersInfoApi2 = allCharactersInfoApi.map(
      response => response.data.results.map(
        charac => {
          return {
            id: charac.id,
            name: charac.name,
            species: charac.species,
            status: charac.status,
            origin: charac.origin.name,
            gender: charac.gender,
            image: charac.image,
          }
        }))
    let allCharacters = allCharactersInfoApi2.flat()//aplana arreglo
    return allCharacters;
  } catch (error) {
    return { error: error.message }
  }
};

const saveApiData = async () => {
  try {
    const characterAll = await getApiData();
    await Character.bulkCreate(characterAll);
  } catch (error) {
    return { error: error.message }
  }
};

module.exports = saveApiData;

//getApiData(); para consologear por terminal