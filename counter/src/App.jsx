import { useState } from 'react';
import './App.css';

function App() {
  
  // let counter = 10;
  let [counter, setCounter] = useState(10);

  const increaseValue = () =>{
    if(counter==20){
      setCounter(counter);
    }
    else
      setCounter(++counter);
  }

  const decreaseValue = () =>{
    if(counter==0){
      setCounter(counter);  
    }
    else
      setCounter(--counter);
  }
  
  return (
    <> 
    <h1>Chai aur react </h1>
    <h2>Counter value {counter}</h2>   

    <button onClick={increaseValue}> Increase {counter} </button>
    
    <br />
    
    <button onClick={decreaseValue}> Decrease {counter} </button>
    
    </>
  )
}

export default App
