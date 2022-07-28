// Import express
const express = require("express");

// create the router for pokemon with Router() function
const evolutionRouter = express.Router();

// Import methods from controller
const {
  get,
  getById,
  create,
  partialEdition,
  completeEdition,
  deleteEvolution,
} = require("../../controllers/evolution-chain");

// Create the path for get pokemons
evolutionRouter.get("/", get);

// Route to get pokemon by id
evolutionRouter.get("/:id", getById);

// Route to create a new pokemon, add to the pokemon list
evolutionRouter.post("/", create);

// Route to partial edit a pokemon
evolutionRouter.patch("/:id", partialEdition);

// Route to complete edit a pokemon
evolutionRouter.put("/:id", completeEdition);

evolutionRouter.delete("/:id", deleteEvolution);

// export module for routes
module.exports = evolutionRouter;
