const mongoose = require('mongoose');

let swapiSchema = new mongoose.Schema(
    {
        favorites: {type: String, required: true}
    }   
)

module.exports = swapiSchema;