import React from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'


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

export default function Generator() {
  return (
    <SectionWrapper header ='Generate your workout' title={['Your','personalized','fitness','journey','awaits.' ]}  >
      <Header index = '1' title='Choose your adventure' description='Discover the perfect workout for your goals!' />

      <div className='flex gap-5'>
        <Button title = 'Individual'/>
        <Button title = 'Casual Split'/>
        <Button title = 'Bodybuilder Split'/>
        <Button title = 'Upper Lower'/>
      </div>
      <Header index = '2' title='Lock on target' description='Discover the perfect workout for your goals!' />
    </SectionWrapper>
  )
}
