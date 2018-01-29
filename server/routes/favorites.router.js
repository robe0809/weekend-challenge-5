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

// getting favorites from database
router.get('/', (req, res) => {
    Film.find({}, (error, findFavorites) => {
        if(error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            console.log('found favorites documents', findFavorites);
            res.send(findFavorites);
        }
    })
});

// delete favorites from database
router.delete('/:id', (req, res) => {
    console.log('favorites id', req.params.id);

    let favoriteId = req.params.id;
    Film.findByIdAndRemove(
        {'_id': favoriteId},
        (error, removedFavorite) => {
            if(error) {
                console.log('error on delete route', error);
                res.sendStatus(500);
            } else {
                console.log('successfully removed', removedFavorite);
                res.sendStatus(201);
            }
        });
});

module.exports = router;