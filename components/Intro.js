import React from 'react'
import Image from 'next/image'

const Intro = ({ about }) => {
    return (
        <div className='md:flex mx-auto md:max-w-4xl sm:items-center px-12 md:py-24 text-white space-y-6 md:space-y-0'>
            <div className='md:w-1/3 items-center'>
                <Image className='rounded-full' src='/robot2.png' alt='profile image' width={250} height={250} />
            </div>
            
            <div className='md:w-2/3 md:ml-12'>
                <h1 className='text-3xl'>
                    {about.name}
                </h1>
                <p className=' leading-relaxed tracking-normal text-lg font-light'>
                    {about.description}
                </p>
            </div>
        </div>
    )
}

export default Intro
