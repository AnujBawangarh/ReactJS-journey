import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [length , setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0;  i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
  
    }

    setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword])

  const copypasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect( () => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator ])

  return (
    <>
      <h1 className='text-4xl text-center text-white font-serif'>This is your own Password Generator</h1>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3 text-3xl'>Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">

    <input type="text"
     className="outline-none w-full py-1 px-3"
      value={password}
     placeholder='password'
     readOnly
     ref={passwordRef}
    />

     <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
     onClick={copypasswordToClipboard}
     >copy
    </button>

  </div>
  <div className='flex text-sm gap-x-2'>

    <div className='flex items-center gap-x-1'>
     <input type="range" 
        min= {6}
        max={100}
     value={length}
     onChange={(e) => {setlength(e.target.value)}}
        className='cursor-pointer'
    />
    <label>Length: {length}</label>
    </div>

    <div className="flex items-center gap-x-1">
    <input type="checkbox" 
  defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>

    <div className="flex items-center gap-x-1">
     <input type="checkbox" 
     defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
    />
     <label htmlFor="characterInput">Characters</label>
    </div>

  </div>

</div>
    </>
  )
}

export default App
