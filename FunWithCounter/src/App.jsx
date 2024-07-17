import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(11);

  const addValue = () =>{
   if(counter!=20){
    
     setCounter((prevCounter)  => prevCounter+1);
     setCounter((prevCounter)  => prevCounter+1);
     setCounter((prevCounter)  => prevCounter+1);
     
    
    // console.log(counter+1);
   } 
   
  }

  const removeValue = () =>{
    if(counter!=0){
      setCounter(counter-1);
      // console.log(counter-1);
  
    }  }
  return (
    <>
    <h1>Counter Project</h1>
    <h3>Counter value: {counter} </h3>
    <button 
    onClick={addValue}
    >Add value</button>
    <br />
   
    <button
    onClick={removeValue}
    >Remove value</button>
    <button>
      Clicked This button to see the magic
    </button>
    </>
  )
}

export default App
