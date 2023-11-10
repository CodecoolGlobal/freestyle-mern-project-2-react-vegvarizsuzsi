require("dotenv").config();

const { exit } = require("node:process");
const fetch = require("node-fetch");
const mongoose = require("mongoose");
const Planet = require("../models/planetModel");

async function fetchData() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    for (let i = 1; i <= 6; i++) {
      await getPlanets(i);
    }
    console.log("All data saved successfully");
    exit(0);
  } catch (error) {
    console.error("Error:", error);
    exit(1);
  }
}

async function getPlanets(id) {
  try {
    const getPlanet = await fetch(`https://swapi.dev/api/planets/?page=${id}`);
    const response = await getPlanet.json();

    for (let i = 0; i < response.results.length; i++) {
      const planet = new Planet({
        name: response.results[i].name,
        diameter: response.results[i].diameter,
        climate: response.results[i].climate,
        terrain: response.results[i].terrain,
        population: response.results[i].population,
      });

      await planet.save();
    }
    console.log(`Saved planet for id ${id}`);
  } catch (error) {
    console.error(`Error occurred while fetching ${id}: `, error);
  }
}

fetchData();
