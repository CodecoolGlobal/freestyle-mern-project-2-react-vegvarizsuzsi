require('dotenv').config();

const { exit } = require('node:process');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const People = require('../models/characterModel');

async function fetchData() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    for (let i = 1; i <= 9; i++) {
      await getPeople(i);
    }
    console.log('All data saved successfully');
    exit(0);
  } catch (error) {
    console.error('Error:', error);
    exit(1);
  }
}

async function getPeople(id) {
  try {
    const getCharacter = await fetch(`https://swapi.dev/api/people/?page=${id}`);
    const response = await getCharacter.json();

    for (let i = 0; i < response.results.length; i++) {
      const people = new People({
        name: response.results[i].name,
        birthYear: response.results[i].birth_year,
        height: response.results[i].height,
        mass: response.results[i].mass,
        gender: response.results[i].gender,
      });

      await people.save();
    }
    console.log(`Saved people for id ${id}`);
  } catch (error) {
    console.error(`Error occurred while fetching ${id}: `, error);
  }
}

fetchData();