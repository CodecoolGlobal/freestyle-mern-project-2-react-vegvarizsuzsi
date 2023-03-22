require('dotenv').config();

const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Planet = require('../models/planetModel');

mongoose.connect(
    process.env.MONGO_URL
)

    .then(() => console.log('connected'))
    .then(() => getPlanets(1))
    .then(() => getPlanets(2))
    .then(() => getPlanets(3))
    .then(() => getPlanets(4))
    .then(() => getPlanets(5))
    .then(() => getPlanets(6))
    .catch(e => console.log(e));

async function getPlanets(id) {
    const getPlanet = await fetch(`https://swapi.dev/api/planets/?page=${id}`);
    const response = await getPlanet.json();

    for (let i = 0; i < response.results.length; i++) {
        const planet = new Planet({
            name: response.results[i].name,
            diameter: response.results[i].diameter,
            climate: response.results[i].climate,
            terrain: response.results[i].terrain,
            population: response.results[i].population
        })

        await planet.save()
    }
}