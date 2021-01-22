import './App.css';
import CardContainer from './components/CardContainer'
import React, {useState} from 'react'
import Counter from './components/Counter'
import Input from './components/Input'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess the Pokemon!</h1>
        <Counter counter={counter} />
        <CardContainer counter={counter} setCounter={setCounter}/>
        {/* <Input pokemon={pokemon} setPokemon={setPokemon} refresh={refresh} setRefresh={setRefresh} answer={answer} setAnswer={setAnswer} counter={counter} setCounter={setCounter}/> */}
      </header>
    </div>
  );
}

export default App;
