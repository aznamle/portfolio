import React from 'react'
import Image from 'next/image'

const Intro = ({ about }) => {
    console.log(about)
    return (
        <div className='flex container mx-auto max-w-3xl py-24 text-white'>
            <div className='w-1/3'>
                <Image className='rounded-full' src='/robot2.png' alt='profile image' width={250} height={250} />
            </div>
            
            <div className='w-2/3 ml-12'>
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
