const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchemaModule = require('../modules/schema.module.js');



let swapiSchema = swapiSchemaModule;
let Swapi = mongoose.model('Swapi', swapiSchema);

router.post('/', (req, res) => {
    console.log('req.body', req.body.url);
    
    let favoriteToAdd = new Swapi(req.body);

    favoriteToAdd.save((error, favoriteAdded) => {
        if(error) {
            console.log('error on post', error);
            res.sendStatus(500);
        } else {
            console.log('successful post', favoriteAdded);
            res.sendStatus(201);            
        }
    })
});

module.exports = router;