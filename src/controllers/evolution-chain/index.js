// Import evolutionServices from services structure
const { response } = require("express");
const evolutionServices = require("../../services/evolution-chain");

// create a evolutionService using evolutionServices class
const evolutionService = new evolutionServices();

// create get method to obtain all the pokemons, use async/await to manage the request
const get = async (request, response) => {
  // Read the answer with a try/catch
  try {
    // store in a const the responde
    const evolutionList = await evolutionService.findAll();
    response.status(200).json(evolutionList);
  } catch (error) {
    // Return a 404 error with a message
    response.status(404).json({ message: "Sorry, there is no data" });
  }
};

// create get method by id with params
const getById = async (request, response) => {
  const { id } = request.params;
  try {
    const evolutionFound = await evolutionService.findEvolution(id);
    response.status(200).send({
      message: `The evolution of the pokemon ${evolutionFound.name} has been found! Evolucions: ${evolutionFound.evolutions}`,
    });
  } catch (error) {
    response
      .status(404)
      .send({ message: "The pokemon and its evolution are not on the list" });
  }
};

// create method for add a new pokemon
const create = async (request, response) => {
  const newEvolution = request.body;
  try {
    await evolutionService.create(newEvolution);
    response.status(201).send({
      message: `The ${newEvolution.name}´s evolution has been added!`,
    });
  } catch (error) {
    response.status(500).send({ message: "Server error! Please try later." });
  }
};

// create a method for partial edition
const partialEdition = async (request, response) => {
  const body = request.body;
  const { id } = request.params;
  try {
    await evolutionService.evolutionPartialEdition(id, body);
    response
      .status(200)
      .send({ message: `The pokemon's evolutions has been partial edited!` });
  } catch (error) {
    response.status(404).send({ message: "The pokemon is not on the list" });
  }
};

// create a method for complete edition
const completeEdition = async (request, response) => {
  const body = request.body;
  const { id } = request.params;
  try {
    await evolutionService.evolutionCompleteEdition(id, body);
    response
      .status(200)
      .send({ message: `The pokemon's evolutions has been complete edited!` });
  } catch (error) {
    response.status(404).send({ message: "The pokemon is not on the list" });
  }
};

//Create a method for delete an evolution
const deleteEvolution = async (request, response) => {
  const { id } = request.params;
  try {
    await evolutionService.delete(id);
    response
      .status(200)
      .send({ message: "The pokemon´s evolution was deleted successfully" });
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
  deleteEvolution,
};
