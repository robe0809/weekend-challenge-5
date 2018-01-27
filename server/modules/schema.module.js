const mongoose = require('mongoose');

let swapiSchema = new mongoose.Schema(
    {
        favorites: {type: String}
    }   
)

module.exports = swapiSchema;