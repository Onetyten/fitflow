import React from 'react'
import SectionWrapper from './SectionWrappernbg'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const{workout} = props
  return (
    <SectionWrapper header ='Have fun trooper' title={['']} id ='workout'  >
      <div className='flex flex-col gap-4'>
        {workout.map((exercise,i)=>{
          return(

            <div className='grid grid-cols-1'>
              <ExerciseCard exercise ={exercise} key ={i} i={i} />
            </div>
            
          )



        })}
      </div>

    </SectionWrapper>
  )
}
