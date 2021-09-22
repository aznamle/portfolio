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
            url: "https://twitter.com/aznamle",
            icon: <SiTwitter fontSize='20px' />
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/namle98/",
            icon: <SiLinkedin fontSize='20px' />
        },
        {
            title: "GitHub",
            url: "https://github.com/aznamle",
            icon: <SiGithub fontSize='20px' />
        },
    ]

    return (
        <div>
            <div className='mx-auto md:max-w-5xl px-4 md:px-0 py-12 justify-start text-gray-900 dark:text-white space-y-4'>
                <div className='w-64 h-64'>
                    <Image className='rounded-full' src='/profile.jpg' alt='profile image' width='500' height='500' />
                </div>
                
                <div className='space-y-2'>
                    <h1 className='text-5xl font-semibold'>
                        {about.name}
                    </h1>
                    <h1 className='text-xl text-gray-600 dark:text-gray-300'>
                        {about.location}
                    </h1>
                    <p className='leading-relaxed tracking-normal text-xl md:text-2xl text-gray-900 dark:text-gray-100'>
                        {about.description}
                    </p>
                </div>
                <div className='grid grid-cols-3 gap-2 md:grid-cols-7'>
                {socials.map((social,index) => (
                        <button key={index}
                            className='bg-gray-200 dark:bg-gray-700 transition ease-in-out duration-300 
                                hover:bg-gray-400 dark:hover:bg-gray-800 py-2 px-5 rounded-3xl' 
                            >
                                <a href={social.url} target="_blank" rel="noreferrer">
                                <div className='flex space-x-2 items-center'>
                                    <span>{social.icon}</span>
                                    <p className='text-lg'>{social.title}</p>
                                </div>
                                </a>
                        </button>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Intro
