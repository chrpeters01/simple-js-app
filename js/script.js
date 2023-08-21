const pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"]
  },
  {
    name: "Charizard",
    height: 1.7,
    types: ["fire", "flying"]
  },
  {
    name: "Metapod",
    height: 0.7,
    types: ["bug"]
  }
 ];

  for (let i = 0; i < pokemonList.length; i++) {
  console.log(pokemonList[i].name);
  console.log(pokemonList[i].height);
  document.write(pokemonList)
}