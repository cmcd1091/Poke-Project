// Shows a single Pokemon, with their name, image, and type.

const Pokecard = ({ name, type, exp }) => {
  return (
    <div className="poke-block">
      <div className="name">
        {name}
      </div>
      <div className="type">
        Type: {type}
      </div>
      <div>
        EXP: {exp}
      </div>
    </div>
  )
}