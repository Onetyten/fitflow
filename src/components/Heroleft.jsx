import React from 'react'

export default function Heroleft() {
  return (
    <div className='text-center flex items-center flex-col '>

        <p className='font-bold text-xl lg:text-3xl text-white mb-3 lg:mb-9 mt-24 lg:mt-24'>
        Unleash Your Potential with <span className=''> </span>
        </p>

        <p className='font-bold text-2xl lg:text-5xl text-greenish-yellow lg:mb-6 mb-2'>
        FitFlow
        </p>
 
        <p className='lg:w-2/6 w-4/6 text-white text-sm lg:text-xl'>
        The ultimate fitness companion designed to help you achieve your health goals. Whether you're a beginner or a seasoned athlete, <span className='text-greenish-yellow'>FitFlow</span> offers personalized workout plans, progress tracking, and expert guidance right at your fingertips. Join us and take the first step towards a stronger, healthier you.
        </p>
        <button className='border-2 border-greenish-yellow lg:text-2xl text-md text-greenish-yellow mt-3 lg:mt-6 lg:p-5 p-2 rounded-lg hover:text-white'>
            Get Started
        </button>

    </div>
  )
}
