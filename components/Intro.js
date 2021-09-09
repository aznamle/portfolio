import React from 'react'
import Image from 'next/image'
import Skills from './Skills'

const Intro = ({ about }) => {
    return (
        <div>
            <div className='mx-auto md:max-w-5xl items-center px-4 md:px-0 py-12  text-gray-900 dark:text-white space-y-4'>
                <div className='items-center'>
                    <Image className='rounded-full' src='/robot2.png' alt='profile image' width={250} height={250} />
                </div>
                
                <div className='space-y-2'>
                    <h1 className='text-5xl font-semibold'>
                        {about.name}
                    </h1>
                    <h1 className='text-xl text-gray-400'>
                        {about.location}
                    </h1>
                    <p className=' leading-relaxed tracking-normal text-lg text-gray-800 dark:text-gray-300'>
                        {about.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro
