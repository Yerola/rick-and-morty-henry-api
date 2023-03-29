const { Favorites } = require('../DB_connection')
// const axios = require("axios");
// const Favorite = require('../models/Favorite');
// const url = 'https://rickandmortyapi.com/api/character/';


const getFavorite = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    if (!favorites.length) return res.status(404).json({ message: 'No hay favoritos aún' });

    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = getFavorite;

// const getCharById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await axios(`${url}${id}`);
//     const characterApi = result.data;
//     const character = {
//       id: characterApi.id,
//       image: characterApi.image,
//       name: characterApi.name,
//       gender: characterApi.gender,
//       species: characterApi.species
//     }
//     res.status(200).json(character);
//   }
//   catch (error) {
//     res.status(500).json({ message: error.message });
//   };
// };

// module.exports = getCharById;


/* const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharById = async function (req, res) {
  const { id } = req.params;
  try {
    const result = await axios(`${url}${id}`)
    const characterApi = result.data;
    // .then(info => info.data)
    // .then(data => {
    let character = {
      id: characterApi.id,
      image: characterApi.image,
      name: characterApi.name,
      gender: characterApi.gender,
      species: characterApi.species
    }
    return res.status(200).json(character);
    // return res.status(200).end(JSON.stringify(character));
  } catch (error) {
    return res.status(500).json(error);
    // res.status(500).json({ message: error.message })
  }
};


module.exports = getCharById; */

/*
const axios = require("axios");

const getCharById = async (req, res) => {
 const { id } = req.params;
 try {
   const info = await axios.get(
     `https://rickandmortyapi.com/api/character/${id}`
   );
   let character = {
     id: info.data.id,
     name: info.data.name,
     image: info.data.image,
     gender: info.data.gender,
     specie: info.data.specie,
   };
   res.status(200).send(character);
 } catch (error) {
   res.status(400).send(err);
 }
};

module.exports = getCharById;
*/


// const axios = require("axios");


// const getCharById = function (res, id) {
//   //const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((data) => data.data) // se puede llamar banana => bananas.data
//     .then((data) => { // acá si debe llamarse "data" porque data es el objeto
//       const character = {
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         id: data.id,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     }).catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Character not found");
//       //res.end(error.message)
//     })
// };


// module.exports = {
//   getCharById
// };
// // module.exports = getCharById;