const express = require('express')

const {
    getCharacters,
    getPlanets,
    getStarships
} = require('../controllers/swController')

const router = express.Router()

//GET all characters
router.get('/characters', getCharacters);

//GET all planets
router.get('/planets', getPlanets);

//GET all starships
router.get('/starships', getStarships);

module.exports = router