import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charecterAllowed, setCharecterAllowed] = useState(false)
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
      str += "0123456789"
    if(charecterAllowed)
      str += "!@#$%^&*(){}[]"

    for(let i=0; i<length; i++){
      let idx = Math.floor(Math.random()*str.length)
      let char = str.charAt(idx);
      pass += char
    }

    setPassword(pass)

    console.log(pass);

  }, [length, numberAllowed, charecterAllowed, setPassword])

  const copyPasswordToClipboard = ( () =>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password)
  })

  useEffect( () => {
    passwordGenerator();
  }, [passwordGenerator])
  

  return (
    <>
      <h1 className='text-4xl text-center p-4 my-10'>Password Generator</h1>
      <div className="text-3xl w-full max-w-md mx-auto rounded-2xl shadow-md text-orange-500 p-4 bg-gray-600">
        
        <div className="flex">
          <input 
            className='rounded-lg w-full h-full p-2'
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref = {passwordRef}
          />
          <button 
          className='bg-orange-600 text-black p-3 rounded-lg'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex gap-x-2 text-lg">
            <input 
            type="range"
            min={4}
            max={16}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <lebel>Length : {length}</lebel>
          </div>

          <div className="text-lg">
            <input type="checkbox"
            defaultChecked = {charecterAllowed}
            onChange={ () => setCharecterAllowed((prev) => !prev)}
            />
            <lebel className='text-sm' >Charecter </lebel>
          </div>

          <div className="text-lg">
            <input type="checkbox"
            defaultChecked = {numberAllowed}
            onChange={ () => setNumberAllowed((prev) => !prev)}
            />
            <lebel className='text-sm'>Number </lebel>
          </div>
          
        </div>

      </div>

    </>

  )
}

export default App
