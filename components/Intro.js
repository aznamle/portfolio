import React from 'react'
import Image from 'next/image'

import {
    SiLinkedin,
    SiTwitter,
    SiGithub
} from "react-icons/si";

const Intro = ({ about }) => {

    const socials = [
        {
            title: "Twitter",
            icon: <SiTwitter fontSize='20px' />
        },
        {
            title: "LinkedIn",
            icon: <SiLinkedin fontSize='20px' />
        },
        {
            title: "GitHub",
            icon: <SiGithub fontSize='20px' />
        },
    ]

    return (
        <div>
            <div className='mx-auto md:max-w-5xl px-4 md:px-0 py-12 justify-start text-gray-900 dark:text-white space-y-4'>
                <div className='justify-start'>
                    <Image className='rounded-full' src='/robot2.png' alt='profile image' width={250} height={250} />
                </div>
                
                <div className='space-y-2'>
                    <h1 className='text-5xl font-semibold'>
                        {about.name}
                    </h1>
                    <h1 className='text-xl text-gray-600 dark:text-gray-300'>
                        {about.location}
                    </h1>
                    <p className=' leading-relaxed tracking-normal text-lg text-gray-900 dark:text-gray-100'>
                        {about.description}
                    </p>
                </div>
                <div className='justify-start'>
                {socials.map((social,index) => (
                    <div key={index} className='flex'>
                        {/* <div className='bg-gray-200 dark:bg-gray-600 p-2'>
                            <span className='text-gray-900 dark:text-white'>{social.icon}</span>
                        </div>
                        <h1 className='text-lg text-gray-900 dark:text-white'>{social.title}</h1> */}
                        <button 
                            className='bg-gray-200 dark:bg-gray-700 transition ease-in-out duration-300 
                                hover:bg-gray-300 dark:hover:bg-gray-800 py-2 px-5 rounded-3xl ml-4 md:ml-12' 
                            >
                                {social.title}
                        </button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Intro
