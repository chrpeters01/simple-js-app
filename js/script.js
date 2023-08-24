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

{
 for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.0) {
    document.write(" " + pokemonList[i].name + " (height 1.7) - Wow, that's big!") };
    if (pokemonList[i].height < 0.9) {
    document.write(" " + pokemonList[i].name + " (height 0.7)") };
  }
}

 