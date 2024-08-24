import React from 'react'

export default function Button(props) {
    const {title} = props
  return (
    <button className='border-2 border-greenish-yellow lg:text-2xl text-md text-greenish-yellow mt-3 lg:mt-6 lg:p-5 p-2 rounded-lg hover:text-white'>
        {title}
    </button>
  )
}
