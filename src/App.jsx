import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'


function App() {


  return (
    <main className='min-h-screen  text-white flex flex-col bg-gradient-to-r from-mirage to-ebony' >
      <Hero/>
      <Generator/>
    </main> 
  )
}

export default App
