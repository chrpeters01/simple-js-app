let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (
      typeof item === "object" && 'name' in item && 'detailsUrl' in item
    ) {
      pokemonList.push(item);
    } else {
      console.log("Please check the inputs");
    }
  }

  function addListItem(pokemon) {
    let unorderedList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    listItem.classList.add('list-group-item', 'col-md-4');
    button.innerText = pokemon.name;
    button.classList.add("my-btn", 'btn-primary');
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#modal-container");
    button.setAttribute("type", "button");
    listItem.appendChild(button);
    unorderedList.appendChild(listItem);

    button.addEventListener("click", () => showDetails(pokemon))
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function find(name) {
    return pokemonList.find((pokemon) => pokemon.name === name);
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.other["official-artwork"].front_default;
        item.height = details.height;
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        showModal(item)
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showModal(pokemon) {
    let pokemonNameElement = document.querySelector('.modal-title');
    pokemonNameElement.innerText = pokemon.name;

    let pokemonHeightElement = document.querySelector('.modal-height');
    pokemonHeightElement.innerText = `Height: ${pokemon.height}`;

    let pokemonImageElement = document.querySelector('.modal-img');
    pokemonImageElement.src = pokemon.imageUrl;

    let pokemonTypesElement = document.querySelector('.modal-types');
    pokemonTypesElement.innerText = `Types: ${pokemon.types}`

  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    find: find,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});