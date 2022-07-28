const { response } = require("express");

// Create a class for store evolution info
class evolutionServices {
  // The class has to have a constructor that store the array
  constructor() {
    this.evolutionChains = [];
    // Call the generaredData function to add data to the class
    this.generatedData();
  }

  // Create a function to generate static data
  generatedData() {
    this.evolutionChains = [
      {
        id: 1,
        species: "bulbasaur",
        name: "squirtle",
        evolutions: ["squirtle, wartortle, blastoise"],
      },
      {
        id: 2,
        species: "caterpie",
        name: "caterpie",
        evolutions: ["caterpie, metapod, butterfree"],
      },
      {
        id: 3,
        species: "weedle",
        name: "weedle",
        evolutions: ["weedle, kakuna, beedrill"],
      },
      {
        id: 4,
        species: "pidgey",
        name: "pidgey",
        evolutions: ["pidgey, pidgeotto, pidgeot"],
      },
      {
        id: 5,
        species: "bulbasaur",
        name: "bulbasaur",
        evolutions: ["bulbasaur, ivysaur, venusaur"],
      },
      {
        id: 6,
        species: "charmander",
        name: "charmander",
        evolutions: ["charmander, charmeleon, charizard"],
      },
    ];
  }

  // Methods for CRUD information to the class

  //1.1 Find all evolutions in the array
  findAll() {
    // Simulate a new Promise with an asynchronous operations using
    // setTimeout instead of store the data on the database
    //  return this.evolutionChains;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // return all elements in an array
        resolve(this.evolutionChains);
      }, 2000);
    });
  }

  // 1.2 Find a evolution by id
  findEvolution(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Search for id in evolutionChains with find function
        const pokemon = this.evolutionChains.find(
          (pokemon) => pokemon.id === parseInt(id)
        );
        if (pokemon) {
          resolve(pokemon);
        } else {
          reject();
        }
      }, 2000);
    });
  }

  // 1.3 Add a new evolution to the list
  create(newEvolution) {
    // Simulate a new Promise with an asynchronous operations using
    // setTimeout instead of store the data on the database
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Add the new pokemon to the existing list with a push method
        this.evolutionChains.push(newEvolution);
        resolve();
      }, 2000);
    });
  }

  // 1.4 Partial edition of a pokemon.
  // @params: id of the pokemon and body we want to update
  evolutionPartialEdition(id, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Search if the id exist on the array
        const isApokemon = this.evolutionChains.findIndex(
          (pokemon) => pokemon.id === parseInt(id)
        );
        if (isApokemon !== -1) {
          // Create a copy of the array to store pokemon list
          let evolutionChainsCopy = [...this.evolutionChains];
          // Store the pokemon info in the positiion isApokemon
          const newEvolutionInfo = this.evolutionChains[isApokemon];
          // Add new info to the copy pokemon list
          evolutionChainsCopy[isApokemon] = { ...newEvolutionInfo, ...body };
          // make the copy array equeal to the pokemon list
          this.evolutionChains = [...evolutionChainsCopy];
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }

  // 1.5 Complete edition of a pokemon
  evolutionCompleteEdition(id, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isApokemon = this.evolutionChains.findIndex(
          (pokemon) => pokemon.id === parseInt(id)
        );
        if (isApokemon !== -1) {
          // Make a copy of the array
          let evolutionChainsCopy = [...this.evolutionChains];
          // Asign the new body at the evolutionChains Copy and store the same id
          evolutionChainsCopy[isApokemon] = { id, ...body };
          // Asing the array copy to the original array
          this.evolutionChains = [...evolutionChainsCopy];
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }

  // 1.6 Delete an evolution
  delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isApokemon = this.evolutionChains.findIndex(
          (pokemon) => pokemon.id === parseInt(id)
        );
        if (isApokemon !== -1) {
          // Create a copy of the pokemon list array
          const evolutionChainsCopy = [...this.evolutionChains];
          // Use splice method for delete the element (id) in the evolutionChainsCopy
          evolutionChainsCopy.splice(isApokemon, 1);
          // Asign the evolutionChainsCopy to the original array
          this.evolutionChains = [...evolutionChainsCopy];
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }
}

// Exports class
module.exports = evolutionServices;
