import React from 'react'

export default function SectionWrapper(props) {
    const {children,header,title} = props
    return (
    <section className='min-h-screen flex-col gap-10 justify-center '>
        <div className='bg-mirage flex flex-col gap-4 justify-center items-center '>
            <p className='uppercase font-bold text-4xl text-greenish-yellow my-7'>
                {header}
            </p>
            <h2 className='uppercase font-bold text-3xl mb-10 text-my-grey '>
                {title[0]} {title[1]} {title[2]} {title[3]} {title[4]}
            </h2>
            <div className='max-w-[1000px] w-full flex flex-col items-center mx-auto gap-10'>
                {children}
            </div>  
           
            

        </div>
    </section>  
  )
}
