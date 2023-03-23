require('dotenv').config();

const fetch = require('node-fetch');
const mongoose = require('mongoose');
const People = require('../models/characterModel');

mongoose.connect(
    process.env.MONGO_URL
)

    .then(() => console.log('connected'))
    .then(() => getPeople(1))
    .then(() => getPeople(2))
    .then(() => getPeople(3))
    .then(() => getPeople(4))
    .then(() => getPeople(5))
    .then(() => getPeople(6))
    .then(() => getPeople(7))
    .then(() => getPeople(8))
    .then(() => getPeople(9))
    .catch(e => console.log(e));

async function getPeople(id) {
    const getCharacter = await fetch(`https://swapi.dev/api/people/?page=${id}`);
    const response = await getCharacter.json();

    for (let i = 0; i < response.results.length; i++) {
        const people = new People({
            name: response.results[i].name,
            birthYear: response.results[i].birth_year,
            height: response.results[i].height,
            mass: response.results[i].mass,
            gender: response.results[i].gender
        })

        await people.save()
    }
}