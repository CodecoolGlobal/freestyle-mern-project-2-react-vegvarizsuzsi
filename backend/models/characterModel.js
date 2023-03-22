const mongoose = require('mongoose');
const { Schema, model } = mongoose

const peopleSchema = new mongoose.Schema({
    name: String,
    birthYear: String,
    height: String,
    mass: String,
    gender: String,
    img: String
});

const People = model('Character', peopleSchema);

module.exports = People;