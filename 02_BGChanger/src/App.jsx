import { useState } from "react";

function App() {
  const [color, setColor] = useState('green');  

  return (
    <>
    <div className="w-full h-screen"
      style={{backgroundColor : color}}>
      
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="text-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <button
          onClick={() => setColor('red')}
          className="bg-red-400 p-4 rounded-xl">Red</button>
          <button
          onClick={() => setColor('green')}
          className="bg-green-400 p-4 rounded-xl">Green</button>
          <button onClick={() => setColor('white')}
          className="bg-gray-400 p-4 rounded-xl">White</button>
          <button onClick={() => setColor('pink')} 
          className="bg-pink-400 p-4 rounded-xl">Pink</button>
          <button onClick={() => setColor('orange')} 
          className="bg-orange-600 p-4 rounded-xl">Orange</button>
          <button onClick={() => setColor('blue')} 
          className="bg-blue-600 p-4 rounded-xl">Blue</button>
          <button onClick={()=>setColor('olive')} className="bg-orange-400 p-4 rounded-xl">Olive</button>
        </div>
      </nav>
    </div>
    </>
  )
}

export default App
