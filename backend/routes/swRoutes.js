const express = require('express')

const {
    getCharacters,
    getPlanets,
    getStarships,
    deleteCharacter,
    deletePlanet,
    deleteStarship,
    getCharacter,
    getPlanet,
    getStarship,
    updateCharacter,
    updatePlanet,
    updateStarship
} = require('../controllers/swController')

const router = express.Router()

//GET all characters, planets, starships
router.get('/characters/', getCharacters);
router.get('/planets/', getPlanets);
router.get('/starships/', getStarships);

//GET a character, a planet, a starship
router.get('/characters/:id', getCharacter)
router.get('/planets/:id', getPlanet)
router.get('/starships/:id', getStarship)

//UPDATE a character, a planet, a starship
router.patch('/characters/:id', updateCharacter)
router.patch('/planets/:id', updatePlanet)
router.patch('/starships/:id', updateStarship)

//DELETE character, planet, starship
router.delete('/characters/:id', deleteCharacter)
router.delete('/planets/:id', deletePlanet)
router.delete('/starships/:id', deleteStarship)

module.exports = router