const mongoose = require('mongoose');

let filmSchema = new mongoose.Schema(
    {
        title: {type: String},
        release_date: {type: Date},
        director: {type: String},
        producer: {type: String},
    },  
)

module.exports = filmSchema;