import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
  <div className='w-full h-screen duration-200'
  style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl'>
        <button onClick={ () => {setColor ('red')}} className='bg-red-700 px-3 py-2 rounded-full text-white shadow-xl'>Red</button>
        <button onClick={ () => {setColor ('green')}} className=' bg-green-700 px-3 py-2 rounded-full text-white shadow-xl'>Green</button>
        <button onClick={ () => {setColor ('blue')}} className='bg-blue-700 px-3 py-2 rounded-full text-white shadow-xl'>Blue</button>
        <button onClick={ () => {setColor ('orange')}} className='bg-orange-700 px-3 py-2 rounded-full text-white shadow-xl'>Orange</button>
        <button onClick={ () => {setColor ('lavender')}} className='bg-lavender-400 px-3 py-2 rounded-full text-white shadow-xl'>Lavender</button>
        <button onClick={ () => {setColor ('pink')}} className='bg-pink-700 px-3 py-2 rounded-full text-white shadow-xl'>Pink</button>
        <button onClick={ () => {setColor ('olive')}} className='bg-olive-400 px-3 py-2 rounded-full text-white shadow-xl'>Olive</button></div>
      </div>
  </div>
  )
}

export default App
