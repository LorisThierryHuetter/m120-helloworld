import './App.css';
import {useState} from "react";

function blubber(){
  return "epic test blubber"
}


function App() {
  function blubberoutput(){
    console.log(blubber())
  }
  const [inputValue, setInputValue] = useState(0)
  let [counter, setCounter] = useState(0)
  function increaseCounter(){
    setCounter(counter+1)
  }
  function decreaseCounter(){
    setCounter(counter-1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, World!</p>
        <button onClick={ blubberoutput }>Blubber</button>
        <p><button onClick={ decreaseCounter }>Decrease</button> <button onClick={ increaseCounter }>Increase</button></p>
        <p><button onClick={ () => setCounter(0) }>Reset Number</button></p>
        <button onClick={ () => setCounter(3306) }>Special Number</button>
        <p>{counter}</p>
        <MyComponent />
        <p></p>

        Value:
        <input type="number" onChange={ (e) => (parseInt(e.target.value) <= 1000 && parseInt(e.target.value) >= 0) ? setInputValue(e.target.value) : console.log("Number outside range (0..1000)")} /> {/* (e) is a parameter given by the object/tag and the => is just a short version of calling a function that only exists while this code is run*/}
        <button onClick={ () => { setCounter(parseInt(inputValue))
          console.log(inputValue) } }>Set</button>

      </header>
    </div>
  );
}

export function MyComponent(){
  return(
    <div>MyComponent</div>
  )
}

export default App;
