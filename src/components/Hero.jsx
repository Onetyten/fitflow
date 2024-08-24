import React from 'react'
import Heroleft from './Heroleft'
import Heroimg from './gymhero.webp'


export default function Hero() {
  return (
    <div className='flex flex-col items-center h-screen relative'>
      <Heroleft/>
      <div className='flex-1'>

      </div>
      <img src='src/images/gymhero.webp' alt="" className='lg:w-1/4 w-2/5 absolute bottom-0 right-0'/>
    </div>
    
  )
}
