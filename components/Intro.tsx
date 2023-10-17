import React from 'react';
import Image from 'next/image';

import {
    SiLinkedin,
    SiGithub
} from "react-icons/si";

import {
    AiOutlineFileText
} from 'react-icons/ai';

import {
    FaLocationDot
} from 'react-icons/fa6';

const Intro = () => {

    const socials = [
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
        {
            title: "Resume",
            url: "/resume.pdf",
            icon: <AiOutlineFileText fontSize='20px' color='' />
        },
    ]
    
  return (
    <div className='px-4 pt-8'>
        <div className='md:flex gap-6 space-y-6 md:space-y-0 md:items-center'>
            <div className='w-64 h-64'>
                <Image className='rounded-full' src='/profile.jpg' alt='profile image' width='500' height='500' />
            </div>
            <div className='space-y-4'>
                <h1 className='text-5xl font-bold'>
                    Hello, I'm Nam! 👋
                </h1>
                <h1 className='text-xl text-gray-600 flex items-center'>
                    Rancho Cucamonga, California ☀️
                </h1>
                <p className='leading-relaxed tracking-normal whitespace-pre-line text-xl text-gray-900'>
                    I am a front-end Developer focusing on Javascript, React and Nextjs. <br />
                    In my free time, I am a gamer, sports fan, and anime fan!
                </p>
                <div className='grid grid-cols-3 gap-2 md:grid-cols-5'>
                    {socials.map((social,index) => (
                        <button key={index}
                            className='bg-gray-300 transition ease-in-out duration-300 
                                hover:bg-gray-400 py-3 px-4 md:px-5 rounded-full' 
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
    </div>
  )
}

export default Intro