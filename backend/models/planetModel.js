const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const planetSchema = new mongoose.Schema({
    name: String,
    diameter: String,
    climate: String,
    terrain: String,
    population: String,
    img: String
});

const Planet = model('Planet', planetSchema);

module.exports = Planet