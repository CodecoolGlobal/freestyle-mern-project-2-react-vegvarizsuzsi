require('dotenv').config();

const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Starship = require('../models/starshipModel');

mongoose.connect(
    process.env.MONGO_URL
)

    .then(() => console.log('connected'))
    .then(() => getStarships(1))
    .then(() => getStarships(2))
    .then(() => getStarships(3))
    .then(() => getStarships(4))
    .catch(e => console.log(e));

async function getStarships(id) {
    const getStarship = await fetch(`https://swapi.dev/api/starships/?page=${id}`);
    const response = await getStarship.json();

    for (let i = 0; i < response.results.length; i++) {
        const starship = new Starship({
            name: response.results[i].name,
            cost_in_credits: response.results[i].cost_in_credits,
            length: response.results[i].length,
            passengers: response.results[i].passengers,
            starship_class: response.results[i].starship_class
        })

        await starship.save()
    }
}