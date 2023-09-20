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

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});