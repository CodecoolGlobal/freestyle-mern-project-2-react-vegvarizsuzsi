const mongoose = require('mongoose')


const characterModel = require('../models/characterModel');
const planetModel = require('../models/planetModel');
const starshipModel = require('../models/starshipModel');

//GET all characters
const getCharacters = async (req, res) => {
    const character = await characterModel.find({})

    res.status(200).json(character)
}

//GET a character

const getCharacter = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such id' })
    }

    const character = await characterModel.findById(id)

    if (!character) {
        return res.status(404).json({ error: 'No such id' })
    }

    res.status(200).json(character)
}

//GET all planets
const getPlanets = async (req, res) => {
    const planet = await planetModel.find({})

    res.status(200).json(planet)
}

//GET all starships
const getStarships = async (req, res) => {
    const starship = await starshipModel.find({})

    res.status(200).json(starship)
}

//UPDATE a character
const updateCharacter = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such id' })
    }

    const character = await characterModel.findByIdAndUpdate({ _id: id }, { ...req.body });

    if (!character) {
        return res.status(404).json({ error: 'No such id' })
    }

    res.status(200).json(character)
}

//DELETE a character
const deleteCharacter = async (req, res) => {
    const { id } = req.params
    const character = await characterModel.findOneAndDelete({ _id: id })

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such character' })
    }

    if (!character) {
        return res.status(400).json({ error: 'No such character' })
    }

    res.status(200).json(character)
}

module.exports = {
    getCharacters,
    getPlanets,
    getStarships,
    deleteCharacter,
    getCharacter,
    updateCharacter,
}