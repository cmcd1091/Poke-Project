// Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.

// Use the defaultProps feature of ***Pokedex*** to provide a default list of Pokemon characters to show. You can use this list for a good set of defaults:

const Pokedex = ({ pokemon }) => {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="poke-container">
        {
          pokemon.map(character => {
            return (
              <Pokecard name={character.name} type={character.type} exp={character.base_experience} id={character.id} key={character.id} />
            )
          })
        }
      </div>
    </div>
  )
}

Pokedex.defaultProps = {
  pokemon: [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
}