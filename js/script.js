let pokemonRepository = (function () {
  let pokemonList = [

    {
      name: 'Bulbasaur',
      height: 0.7,
      types: ['Grass', 'Poison']

    },
    {
      name: 'Charizard',
      height: 1.7,
      types: ['Fire', 'Flying']

    },
    {
      name: 'Metapod',
      height: 0.7,
      types: ['Bug']

    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(`<p> ${pokemon.name} : (type: ${pokemon.types}) / (height: ${pokemon.height})`);
})