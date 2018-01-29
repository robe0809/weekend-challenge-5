const mongoose = require('mongoose');

let filmSchema = new mongoose.Schema(
    {
        title: {type: String},
        release_date: {type: Date},
        director: {type: String},
        producer: {type: String},
        name: {type: String},
        hair_color: {type: String},
        birth_year: {type: String},
        gender: {type: String},
    },  
)

module.exports = filmSchema;