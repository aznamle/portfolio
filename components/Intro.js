import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='flex container mx-auto max-w-3xl py-24 text-white'>
            <div className='w-1/3'>
<<<<<<< HEAD
                {/* <Image className='rounded-full' src='/robot2.png' alt='profile image' width={250} height={250} /> */}
=======
                <Image className='rounded-full' src='/robot2.png' alt='profile image' width={200} height={200} />
>>>>>>> 583bfa249a955eed9ec3e4189d82da96e2a2c66e
            </div>
            
            <div className='w-2/3'>
            <p className=' leading-relaxed tracking-normal text-lg'>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
        </div>
    )
}

export default Intro
