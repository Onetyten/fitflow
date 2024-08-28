import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './Utils/functions'


function App() {
  const[workout,setWorkout] = useState(null)
  const [muscles,setMuscles] = useState([])
  const [goals,setGoals] = useState('Strength_power')
  const [bodyPart, setBodyPart] = useState('Individual')


  function updateWorkout(){
    if (muscles.length<1){
      return
    }
    let newWorkout = generateWorkout({bodyPart,muscles,goals})
    console.log(newWorkout)
    
    setWorkout(newWorkout)
    window.location.href ='#workout'
  }



  return (
    <main className='min-h-screen  text-white flex flex-col bg-gradient-to-r from-mirage to-ebony' >
      <Hero/>
      <Generator muscles ={muscles} setMuscles ={setMuscles} goals = {goals} setGoals = {setGoals} bodyPart = {bodyPart} setBodyPart = {setBodyPart} updateWorkout = {updateWorkout} />
      {workout &&(<Workout workout = {workout} />)}
    </main> 
  )
}

export default App
