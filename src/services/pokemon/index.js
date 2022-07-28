const { response } = require("express");

// Create class for store pokemon info
class pokemonServices {
  // The class has to have a constructor that store the array
  constructor() {
    this.pokemonList = [];
    // Call the generaredData function to add data to the class
    this.generatedData();
  }

  // Create a function to generate static data
  generatedData() {
    this.pokemonList = [
      {
        id: 1,
        name: "bulbasaur",
        weight: 69,
        height: 7,
        species: "bulbasaur",
        types: ["grass", "posion"],
      },
      {
        id: 2,
        name: "ivysaur",
        weight: 130,
        height: 10,
        species: "ivysaur",
        types: ["grass", "posion"],
      },
      {
        id: 3,
        name: "charmander",
        weight: 85,
        height: 6,
        species: "charmander",
        types: ["fire"],
      },
      {
        id: 4,
        name: "squirtle",
        weight: 90,
        height: 5,
        species: "squirtle",
        types: ["water"],
      },
    ];
  }

  // Methods for CRUD information to the class

  //1.1 Find all pokemons in the array
  findAll() {
    // Simulate a new Promise with an asynchronous operations using
    // setTimeout instead of store the data on the database
    //  return this.pokemonList;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // return all elements in an array
        resolve(this.pokemonList);
      }, 2000);
    });
  }

  // 1.2 Find a pokemon by id
  findPokemon(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Search for id in pokemonList with find function
        const pokemon = this.pokemonList.find(
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

  // 1.3 Add a new pokemon to the list
  create(newPokemon) {
    // Simulate a new Promise with an asynchronous operations using
    // setTimeout instead of store the data on the database
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Add the new pokemon to the existing list with a push method
        this.pokemonList.push(newPokemon);
        resolve();
      }, 2000);
    });
  }

  // 1.4 Partial edition of a pokemon.
  // @params: id of the pokemon and body we want to update
  pokemonPartialEdition(id, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Search if the id exist on the array
        const isApokemon = this.pokemonList.findIndex(
          (pokemon) => pokemon.id === parseInt(id)
        );
        if (isApokemon !== -1) {
          // Create a copy of the array to store pokemon list
          let pokemonListCopy = [...this.pokemonList];
          // Store the pokemon info in the positiion isApokemon
          const newPokemonInfo = this.pokemonList[isApokemon];
          // Add new info to the copy pokemon list
          pokemonListCopy[isApokemon] = { ...newPokemonInfo, ...body };
          // make the copy array equeal to the pokemon list
          this.pokemonList = [...pokemonListCopy];
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }

  // 1.5 Complete edition of a pokemon
  pokemonCompleteEdition(id, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isApokemon = this.pokemonList.findIndex(
          (pokemon) => pokemon.id === parseInt(id)
        );
        if (isApokemon !== -1) {
          // Make a copy of the array
          let pokemonListCopy = [...this.pokemonList];
          // Asign the new body at the pokemonList Copy and store the same id
          pokemonListCopy[isApokemon] = { id, ...body };
          // Asing the array copy to the original array
          this.pokemonList = [...pokemonListCopy];
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  }
}

// Exports class
module.exports = pokemonServices;
