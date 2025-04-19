// Shows a single Pokemon, with their name, image, and type.

const Pokecard = ({ name, id, type, exp }) => {
  return (
    <div className="poke-block">

      <div className="name">
        {name}
      </div>

      <div>
        <img src={getImage(id)}></img>
      </div>

      <div className="info">
        Type: {type}
      </div>

      <div className="info">
        EXP: {exp}
      </div>
    </div>
  )
}

function getImage(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}