let pokemonList = [
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

  for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height <1.0 && pokemonList[i].height >1.5) {
    console.log(pokemonList[i].name + " Wow, that's big!") };
    document.write(pokemonList[i].name);
  }

  