const express = require('express')

const {
    getCharacters,
    getPlanets,
    getStarships,
    deleteCharacter,
    getCharacter,
    updateCharacter,
} = require('../controllers/swController')

const router = express.Router()

//GET all characters
router.get('/characters/', getCharacters);

router.get('/characters/:id', getCharacter)

//GET all planets
router.get('/planets/', getPlanets);

//GET all starships
router.get('/starships/', getStarships);

router.patch('/characters/:id', updateCharacter)

//DELETE character
router.delete('/characters/:id', deleteCharacter)

module.exports = router