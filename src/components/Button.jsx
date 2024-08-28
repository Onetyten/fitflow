import React from 'react'

export default function Button(props) { 
    const {children,func} = props
  return (
    <button onClick={func} className='border-2 border-greenish-yellow lg:text-2xl text-md text-greenish-yellow mt-3 lg:mt-6 lg:p-5 p-2 rounded-lg hover:text-white'>
        {children}
    </button>
  )
}
