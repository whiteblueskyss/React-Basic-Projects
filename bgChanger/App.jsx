import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200"
         style={{backgroundColor: color}}>
          <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
            <button className="px-2 bg-red-700 rounded"
              onClick={() =>{setColor("red")}}
             >Red</button>
            <button className="px-2 bg-green-700 rounded"
            onClick={() =>{setColor("green")}}
            >Green</button>
            <button className="px-2 bg-yellow-700 rounded"
            onClick={() =>{setColor("yellow")}}
            >Yellow</button>
            <button className="px-2 bg-white rounded"
            onClick={() =>{setColor("white")}}
            >White</button>
            <button className="px-2 bg-orange-500 rounded"
            onClick={() =>{setColor("olive")}}
            >Olive</button>
          </div>
      </div>
    </>
  )
}

export default App
