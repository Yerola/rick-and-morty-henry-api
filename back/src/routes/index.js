const { Router } = require("express");

const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavorite = require('../controllers/getFavorite');
const postFavorite = require('../controllers/postFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const getAllChars = require('../controllers/getAllChars');

const router = Router();

router.get("/rickandmorty/character/:id", getCharById);
router.get("/rickandmorty/detail/:id", getCharDetail);
router.get('/rickandmorty/fav', getFavorite);//EJERCICIO 3
router.post('/rickandmorty/fav', postFavorite);
router.delete('/rickandmorty/fav/:id', deleteFavorite);
router.post('/fav', postFav);//EJERCICIO 2  
router.delete('/fav/:id', deleteFav);//EJERCICIO 4

router.get('/allCharacters', getAllChars);

module.exports = { router };

