import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm' >
      <Hero/>
      <Generator/>
      <Workout/>
    </main>
  )
}

export default App
