import React from 'react'

export default function SectionWrapper(props) {
    const {children,header,title,id} = props
    return (
    <section id={id} className='min-h-screen flex-col gap-10 justify-center '>
        <div className='flex flex-col gap-4 justify-center items-center mt-20 '>
            <p className='uppercase pt-2 font-bold sm:text-3xl mb-2 text-2xl text-center sm:text-left text-greenish-yellow '>
                {header}
            </p>
            {/* <h2 className='uppercase font-bold text-2xl mb-2 text-my-grey '>
                {title[0]} {title[1]} {title[2]} {title[3]} {title[4]}
            </h2> */}
            <div className='max-w-[1000px] w-full flex flex-col items-center mx-auto gap-10'>
                {children}
            </div>  
           
            

        </div>
    </section>  
  )
}
