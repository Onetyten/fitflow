import React from 'react'

export default function Heroleft() {
  return (
    
    <div className='text-center flex items-center flex-col '>

        <p className='font-bold text-xl sm:text-2xl md:text-3xl text-white mb-3 md:mb-9 mt-6 sm:mt-12 md:mt-24'>
        Unleash Your Potential with <span className=''> </span>
        </p>

        <p className='font-bold text-2xl sm:text-3xl md:text-5xl text-greenish-yellow sm:mb-6 mb-2'>
        FitFlow
        </p>
 
        <p className='sm:w-2/6 w-4/6 text-white text-sm sm:text-xl md:text-2xl'>
        The ultimate fitness companion designed to help you achieve your health goals. Whether you're a beginner or a seasoned athlete, <span className='text-greenish-yellow'>FitFlow</span> offers personalized workout plans, progress tracking, and expert guidance right at your fingertips. Join us and take the first step towards a stronger, healthier you.
        </p>
        <button className='border-2 border-greenish-yellow md:text-2xl sm:text-xl text-md text-greenish-yellow mt-3 sm:mt-4 md:mt-6 md:p-5 sm:p-3 p-2 rounded-lg hover:text-white' onClick={()=>{
          window.location.href ='#generate'
        }}>
            Get Started
        </button>

    </div>
  )
}
