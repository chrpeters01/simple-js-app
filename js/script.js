let pokemonRepository = (function () {
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

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

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight
      item.types = details.types.map(function (type) {
        return type.type.name;
      });
      item.abilities = details.abilities.map(function (ability) {
        return ability.ability.name;
      });
      item.abilities = details.abilities.map(function (ability) {
        return ability.ability.name;
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
       console.log(pokemon);
     });
    }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails

  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  })
});