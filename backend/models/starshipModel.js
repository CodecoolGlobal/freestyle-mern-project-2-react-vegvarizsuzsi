const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const starshipSchema = new mongoose.Schema({
    name: String,
    cost_in_credits: String,
    length: String,
    passengers: String,
    starship_class: String,
    img: String
});

const Starship = model('Starship', starshipSchema);

module.exports = Starship;