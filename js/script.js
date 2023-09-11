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
    ];
    
    return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      }
    };
 })();
      

    
  
  pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + pokemon.height + pokemon.types);
  });