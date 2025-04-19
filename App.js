// This should just render a single Pokedex. 

const App = () => {
  return (
    <div>
      <Pokedex />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));