// Import express to use it
const { application } = require("express");
const express = require("express");

const pokemonRouter = require("./pokemon");

// Create the API route
const routerApi = (app) => {
  app.use("/pokemons", pokemonRouter);
};

// Export general routes
module.exports = routerApi;
