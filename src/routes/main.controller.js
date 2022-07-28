// Import express to use it
const { application } = require("express");
const express = require("express");

const pokemonRouter = require("./pokemon");
const evolutionRouter = require("./evolution-chain");

// Create the API route
const routerApi = (app) => {
  app.use("/pokemons", pokemonRouter);
  app.use("/evolutions", evolutionRouter);
};

// Export general routes
module.exports = routerApi;
