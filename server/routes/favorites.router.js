const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchemaModule = require('../modules/schema.module.js');



let swapiSchema = swapiSchemaModule;
let Swapi = mongoose.model('Swapi', swapiSchema);

module.exports = router;