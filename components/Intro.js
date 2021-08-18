import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='flex container mx-auto max-w-3xl py-24'>
            <div className='w-1/3 rounded-full'>
                <Image src='/public/robot2.jpg' width={250} height={250} />
            </div>
            
            <div className='w-2/3 px-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            
        </div>
    )
}

export default Intro
