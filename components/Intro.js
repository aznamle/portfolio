import React from 'react'
import Image from 'next/image'
import Skills from './Skills'

const Intro = ({ about }) => {
    return (
        <div>
            <div className='md:flex mx-auto md:max-w-5xl items-center space-x-8 px-8 md:px-0 py-12 md:py-24 text-white space-y-6 md:space-y-0'>
                <div className='md:w-1/4 items-center'>
                    <Image className='rounded-full' src='/robot2.png' alt='profile image' width={250} height={250} />
                </div>
                
                <div className='md:w-3/4 md:ml-12 space-y-4'>
                    <h1 className='text-5xl font-semibold'>
                        {about.name}
                    </h1>
                    <p className=' leading-relaxed tracking-normal text-lg text-gray-200'>
                        {about.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro
