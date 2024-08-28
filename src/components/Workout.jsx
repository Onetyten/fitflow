import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const{workout} = props
  return (
    <SectionWrapper header ='Have fun trooper' title={['Have fun trooper']} id ='workout'  >
      <div className='flex flex-col gap-4'>
        {workout.map((exercise,i)=>{
          return(
            <ExerciseCard exercise ={exercise} key ={i} i={i} />

          )



        })}
      </div>

    </SectionWrapper>
  )
}
