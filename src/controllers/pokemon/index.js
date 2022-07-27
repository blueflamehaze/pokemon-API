// Import pokemonServices from services structure
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

// exports controller methods
module.exports = { get };
