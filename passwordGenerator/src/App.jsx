import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length , setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charecter, setCharecter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(charecter) str += "!@#$%^&*";

    for (let i = 1;  i<=length; i++) {
      const idx = Math.floor(Math.random()*str.length + 1);

      pass += str[idx];

    }

    setPassword(pass);

  }, [length,number,charecter,setPassword])

  const copyToClip = useCallback( () =>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  },[number,charecter,length, setCharecter, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-2xl text-center text-orange-500 bg-gray-700 ">
        <p className='mb-4 text-white'>Password Generator</p>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='w-full outline-none px-4 py-2' placeholder='password' readOnly ref={passwordRef}/>
          <button className='p-3 bg-blue-300 text-black outline-one shrink-0' onClick={copyToClip}>Copy</button>
        </div>

        <div className='flex gap-2'>
          <div className="flex text-sm gap-x-2">
          <input type="range" min={6} max={20} value={length} className='cursor-pointer' 
          onChange={(e) =>{
            setLength(e.target.value)
          }} />
          <lebel className="text-lg bg-slate-300 rounded text-black px-2" >len: {length}</lebel>
         </div>

         <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked= {number} onChange={ () =>{
              setNumber((prev) => !prev)
           }}/>
           <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked= {charecter} onChange={ () =>{
              setCharecter((prev) => !prev)
           }}/>
           <label>Charecter</label>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
