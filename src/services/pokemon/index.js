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
}
