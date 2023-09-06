let pokemonRepository = (function(){
let pokemonList=[
      
      {
          name: 'Bulbasaur',
          height: 0.7,
          types: ['Grass', 'Poison']
  
      },
      {
          name: 'Charizard',
          height: 1.7,
          types: ['Fire' , 'Flying']
  
      },
      {
          name: 'Metapod',
          height: 0.7,
          types: ['Bug']
  
      }
  ]
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonList.forEach(function(pokemon) {
  console.log(pokemon.name + pokemon.height + pokemon.types);
});
 
 

