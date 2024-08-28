import { info } from 'autoprefixer'
import React, { useState } from 'react'

export default function ExerciseCard(props) {
    
    const{exercise,i} = props
    const [setCompleted,setSetCompleted]=useState(0)

    function handleCount(){
        setSetCompleted((setCompleted+1)%6)

    }
  return (
    <div className='p-4 rounded-3xl flex flex-col gap-4 bg-mirage sm:w-full mb-10'>
        <div className='flex flex-col w-full'>
            <h4 className=' text-white sm:text-2xl text-xl bg-my-grey font-extrabold rounded-full hover:text-white hover:bg-greenish-yellow w-full sm:w-16 text-center py-4 mb-10'>
                0{i+1}
            </h4>
            <div className='flex w-full items-center justify-between'>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-2xl'>
                    {exercise.name.replaceAll("_"," ")}
                </h2>
                <p className='text-xl text-my-grey sm:text-2xl'>
                    {exercise.type}
                </p>
            </div>


        </div>
        <div className='flex flex-col'>
            <p className='capitalize sm:text-xl text-lg text-my-grey'>
                {exercise.muscles.join('&')}
            </p>
            
        </div>

        <div className='flex flex-col gap-2 sm:text-xl text-sm mb-10'>
           { exercise.description.split('___').map((val)=>{

            return(
                <div>
                    {val}
                </div>
            )

           })}

        </div>


        <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 text-center sm:text-xl text-sm w-full'>
            {['reps','rest','tempo'].map(info=>{
                return(
                    <div className='flex flex-col p-2 rounded border-2 border-solid border-greenish-yellow w-full  hover:border-white' key={info}>
                        <h3 className='capitalize '>
                            {info ==='reps' ?`${exercise.unit}` : info }
                        </h3>

                        <p className='font-medium'>
                            {exercise[info]}
                        </p>
                    </div>
                )

            })}

            <button className='flex flex-col p-2 rounded duration-200 border-2 border-greenish-yellow w-full hover:border-white text-center' onClick={handleCount}>
                <h3 className='text-center w-full'>
                    Sets completed
                </h3>
                <p className='font-medium text-center w-full'>
                    {setCompleted}/5


                </p>

            </button>
        </div>
        
    </div>
  )
}
