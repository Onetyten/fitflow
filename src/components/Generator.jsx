import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'
import { SCHEMES, WORKOUTS } from '../Utils/regiment'


function Header(props) {
  const{index,title,description} = props
  return(

    <div className='flex flex-col gap-4 justify-start items-start w-full'>

      <div className='flex text-3xl items-center gap-3'>
        <p className='text-white bg-my-grey px-4 py-3 font-extrabold rounded-full hover:text-white hover:bg-greenish-yellow'>{index}</p>
        <p className=''>{title}</p>
      </div>
      <p className='flex text-3xl items-center justify-start gap-3 text-left text-my-grey'>{description}</p>
  
    </div>

  )
}

export default function Generator(props) {
  const [showModal,setShowModal]= useState(false)
  const{ muscles,setMuscles,goals,setGoals,bodyPart,setBodyPart,updateWorkout} = props




  function ToggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {

    if (muscles.includes(muscleGroup))
      {
        setMuscles(muscles.filter(val => val !== muscleGroup))
        return
      } 
    if (muscles.length>2)
    {
      return
    }
    if (bodyPart !== 'Individual')
    {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }




    setMuscles([...muscles,muscleGroup])

    if (muscles.length === 2){
      setShowModal(false)
    }
  }




  return (
    <SectionWrapper header ='Generate your workout' title={['Your','personalized','fitness','journey','awaits.' ]} id='generate' >
      <Header index = '01' title='Choose your adventure' description='Discover the perfect workout for your goals!' />
      <div className='grid grid-cols-4 gap-4'>

        {Object.keys(WORKOUTS).map((type,typeIndex) =>{
          return(
            <button key={typeIndex} className={'border-2 lg:text-2xl text-md text-greenish-yellow mt-3 lg:mt-6 lg:p-5 p-2 rounded-lg hover:text-white' + (type===bodyPart  ? ' border-white text-white':' border-greenish-yellow text-greenish-yellow')}onClick={()=>{
              setMuscles([])
              setBodyPart(type)
              
              
            }}>
              <p>
                {type.replaceAll('_',' ')}
              </p> 
            </button>
          )

        })}

      </div>

      <Header index = '02' title='Lock on target' description='What muscles are you training' />
      <div className='py-3 border-2 border-greenish-yellow lg:text-2xl text-md text-greenish-yellow mt-3 lg:mt-6 rounded-lg hover:border-white w-full hover:text-white '>

        <button className='relative p-5 flex items-center justify-center'  onClick={ToggleModal} >
          <p className='text-center capitalize'>
            {muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ') }
          </p>
          <i className="fa-solid fa-caret-down absolute -right-3 top-1/2 -translate-y-1/2 hover:text-white"></i>
        </button>
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
              {(bodyPart === 'Individual' ? WORKOUTS[bodyPart] : Object.keys(WORKOUTS[bodyPart])).map((muscleGroup, muscleGroupIndex) => {
              return (
                  <button onClick={() => {
                      updateMuscles(muscleGroup)
                  }} key={muscleGroupIndex} className={'hover:text-greenish-yellow duration-200 text-my-grey ' + (muscles.includes(muscleGroup) ? ' text-white' : ' ')}>
                      <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                  </button>
              )
               })}

          </div>
        )}

      </div>



      <Header index = '03' title='Pick your motive' description='Select your ultimate objective' />
      <div className='grid grid-cols-3 gap-4 '>

        {Object.keys(SCHEMES).map((scheme,schemeIndex) =>{
          return(
            <button key={schemeIndex} className={'border-2 lg:text-2xl text-md text-greenish-yellow mt-3 lg:mt-6 lg:p-5 p-2 rounded-lg hover:text-white' + (scheme===goals  ? ' border-white text-white':' border-greenish-yellow text-greenish-yellow')}onClick={()=>{
              setGoals (scheme)
              
              
            }}>
              <p>
                {scheme.replaceAll('_',' ')}
              </p> 
            </button>
          ) 

        })}

      </div>

      <Button func ={updateWorkout}>
        Generate workout
      </Button>


    </SectionWrapper>
  )
}
