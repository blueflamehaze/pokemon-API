// Import pokemonServices from services structure
const { response } = require("express");
const pokemonServices = require("../../services/pokemon/index");

// create a pokemonService using pokemonServices class
const pokemonService = new pokemonServices();

// create get method to obtain all the pokemons, use async/await to manage the request
const get = async (request, response) => {
  // Read the answer with a try/catch
  try {
    // store in a const the responde
    const pokemonList = await pokemonService.findAll();
    response.status(200).json(pokemonList);
  } catch (error) {
    // Return a 404 error with a message
    response.status(404).json({ message: "Sorry, there is no data" });
  }
};

// create get method by id with params
const getById = async (request, response) => {
  const { id } = request.params;
  try {
    const pokemonFound = await pokemonService.findPokemon(id);
    response
      .status(200)
      .send({ message: `The pokemon ${pokemonFound.name} has been found!` });
  } catch (error) {
    response.status(404).send({ message: "The pokemon is not on the list" });
  }
};

// create method for add a new pokemon
const create = async (request, response) => {
  const newPokemon = request.body;
  try {
    await pokemonService.create(newPokemon);
    response
      .status(201)
      .send({ message: `The pokemon ${newPokemon.name} has been added!` });
  } catch (error) {
    response.status(500).send({ message: "Server error! Please try later." });
  }
};

// create a method for partial edition
const partialEdition = async (request, response) => {
  const body = request.body;
  const { id } = request.params;
  try {
    await pokemonService.pokemonPartialEdition(id, body);
    response
      .status(200)
      .send({ message: `The pokemon has been partial edited!` });
  } catch (error) {
    response.status(404).send({ message: "The pokemon is not on the list" });
  }
};

// create a method for complete edition
const completeEdition = async (request, response) => {
  const body = request.body;
  const { id } = request.params;
  try {
    await pokemonService.pokemonCompleteEdition(id, body);
    response
      .status(200)
      .send({ message: `The pokemon has been complete edited!` });
  } catch (error) {
    response.status(404).send({ message: "The pokemon is not on the list" });
  }
};

//Create a method for delete a pokemon
const deletePokemon = async (request, response) => {
  const { id } = request.params;
  try {
    await pokemonService.delete(id);
    response
      .status(200)
      .send({ message: "The pokemon was deleted successfully" });
  } catch (error) {
    response.status(404).send({ message: "The pokemon is not on the list" });
  }
};

// exports controller methods
module.exports = {
  get,
  getById,
  create,
  partialEdition,
  completeEdition,
  deletePokemon,
};
