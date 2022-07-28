// Import express
const express = require("express");

// create the router for pokemon with Router() function
const pokemonRouter = express.Router();

// Import methods from controller
const {
  get,
  getById,
  create,
  partialEdition,
  completeEdition,
} = require("../../controllers/pokemon");

// Create the path for get pokemons
pokemonRouter.get("/", get);

// Route to get pokemon by id
pokemonRouter.get("/:id", getById);

// Route to create a new pokemon, add to the pokemon list
pokemonRouter.post("/", create);

// Route to partial edit a pokemon
pokemonRouter.patch("/:id", partialEdition);

// Route to complete edit a pokemon
pokemonRouter.put("/:id", completeEdition);

// export module for routes
module.exports = pokemonRouter;
