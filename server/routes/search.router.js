const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchemaModule = require('../modules/schema.module.js');



let filmSchema = swapiSchemaModule;
let Film = mongoose.model('Film', filmSchema);



module.exports = router;