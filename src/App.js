import './App.css';
import {useState} from "react";

function blubber(){
  return "epic test blubber"
}

function App() {
  function blubberoutput(){
    console.log(blubber())
  }
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
        <p>{counter}</p>
        <MyComponent />
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
