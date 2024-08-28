import { info } from 'autoprefixer'
import React, { useState } from 'react'

export default function ExerciseCard(props) {
    
    const{exercise,i} = props
    const [setCompleted,setSetCompleted]=useState(0)

    function handleCount(){
        setSetCompleted((setCompleted+1)%6)

    }
  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-mirage'>
        <div className='flex flex-col'>
            <h4 className='text-3xl hidden sm:inline sm:text-4xl'>
                0{i+1}
            </h4>
            <h2 className='capitalize whitespace-nowrap truncate max-w-full'>
                {exercise.name.replaceAll("_"," ")}
            </h2>
            <p className='text-sm'>
                {exercise.type}

            </p>

        </div>
        <div className='flex flex-col'>
            <h3>
                Muscle groups
            </h3>
            <p className='capitalize'>
                {exercise.muscles.join('&')}
            </p>
            
        </div>

        <div className='flex flex-col gap-2'>
           { exercise.description.split('___').map((val)=>{

            return(
                <div>
                    {val}
                </div>
            )

           })}

        </div>


        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            {['reps','rest','tempo'].map(info=>{
                return(
                    <div className='flex flex-col p-2 rounded border-[1.5px] border-solid border-greenish-yellow w-full' key={info}>
                        <h3 className='capitalize text-sm'>
                            {info ==='reps' ?`${exercise.unit}` : info }
                        </h3>

                        <p className='font-medium'>
                            {exercise[info]}
                        </p>
                    </div>
                )

            })}

            <button className='flex flex-col p-2 rounded duration-200 border-2 border-greenish-yellow w-full hover:border-white' onClick={handleCount}>
                <h3>
                    Sets completed
                </h3>
                <p className='font-medium'>
                    {setCompleted}/5


                </p>

            </button>
        </div>
        
    </div>
  )
}
