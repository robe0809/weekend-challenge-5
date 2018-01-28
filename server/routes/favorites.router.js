const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchemaModule = require('../modules/schema.module.js');

let filmSchema = swapiSchemaModule;
let Film = mongoose.model('Film', filmSchema);

// posting favorites to database
router.post('/', (req, res) => {
    console.log('req.body', req.body);
    
    let favoriteToAdd = new Film(req.body);

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

// delete favorites from database
router.delete('/:id'), (req, res) => {
    let favoritesId =  req.params.id
    Film.findByIdAndRemove(
        {'_id': favoritesId},
        (error, favoriteRemoved) => {
        if(error) {
            console.log('error on delete', error);
            res.sendStatus(500);
        } else {
            console.log('successful delete', favoriteRemoved);
            res.sendStatus(201);            
        }
    })
}

// getting favorites from database
router.get('/', (req, res) => {
    Film.find({}, (error, findFavorites) => {
        if(error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            console.log('found employee documents', findFavorites);
            res.send(findFavorites);
        }
    })
});

module.exports = router;