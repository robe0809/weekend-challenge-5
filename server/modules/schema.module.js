const mongoose = require('mongoose');

let filmSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        release_date: {type: Date},
        director: {type: String, required: true},
        producer: {type: String, required: true}
    }   
)

module.exports = filmSchema;