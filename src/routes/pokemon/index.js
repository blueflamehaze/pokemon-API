// Import express
const express = require("express");

// create the router for pokemon with Router() function
const pokemonRouter = express.Router();

// Import methods from controller
const { get } = require("../../controllers/pokemon");

// Create the path for get pokemons
pokemonRouter.get("/pokemons", get);

// export module for routes
module.exports = pokemonRouter;
