require("dotenv").config();

const { exit } = require("node:process");
const fetch = require("node-fetch");
const mongoose = require("mongoose");
const Starship = require("../models/starshipModel");

async function fetchData() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    for (let i = 1; i <= 4; i++) {
      await getStarships(i);
    }
    console.log("All data saved successfully");
    exit(0);
  } catch (error) {
    console.error("Error:", error);
    exit(1);
  }
}

async function getStarships(id) {
  try {
    const getStarship = await fetch(
      `https://swapi.dev/api/starships/?page=${id}`
    );
    const response = await getStarship.json();

    for (let i = 0; i < response.results.length; i++) {
      const starship = new Starship({
        name: response.results[i].name,
        cost_in_credits: response.results[i].cost_in_credits,
        length: response.results[i].length,
        passengers: response.results[i].passengers,
        starship_class: response.results[i].starship_class,
      });

      await starship.save();
    }
    console.log(`Saved starship for id ${id}`);
  } catch (error) {
    console.error(`Error occurred while fetching ${id}: `, error);
  }
}

fetchData();
