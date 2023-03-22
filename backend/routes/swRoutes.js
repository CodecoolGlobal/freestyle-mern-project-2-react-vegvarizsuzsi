const express = require('express')

const {
    getCharacters,
    getPlanets,
    getStarships,
    deleteCharacter
} = require('../controllers/swController')

const router = express.Router()

//GET all characters
router.get('/characters/', getCharacters);

//GET all planets
router.get('/planets/', getPlanets);

//GET all starships
router.get('/starships/', getStarships);


//DELETE character
router.delete('/characters/:id', deleteCharacter)

module.exports = router