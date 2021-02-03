const { response } = require("express");
const pokedex = require('../pokemons.json');


module.exports = app => {
    app.get('/pokemons', (req, res)=> {
        res.json(pokedex);
    });

}