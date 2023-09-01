import React from 'react'

import {
    FaNodeJs,
    FaReact,
    FaJs,
  } from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

interface Skill {
    id: number;
    title: string;
    icon: JSX.Element;
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        {
            id: 1,
            title: 'Javascript',
            icon: <FaJs fontSize='30px' />,
        },
        {
            id: 2,
            title: 'Typescript',
            icon: <SiTypescript fontSize='30px' />,
        },
        {
            id: 3,
            title: 'React',
            icon: <FaReact fontSize='30px' />,
        },
        {
            id: 4,
            title: 'Next.js',
            icon: <SiNextdotjs fontSize='30px' />,
        },
        {
            id: 5,
            title: 'Node.js',
            icon: <FaNodeJs fontSize='30px' />,
        },
        {
            id: 6,
            title: 'Tailwind CSS',
            icon: <SiTailwindcss fontSize='30px' />,
        },
    ];

    return (
        <div className='mx-auto max-w-5xl space-y-4 px-4 md:px-0 py-4'>
            <h1 className='text-gray-900 text-3xl font-bold'>Skills</h1>
            <p className='text-gray-700 text-xl pb-6'>I enjoy learning about about cutting-edge technologies. These are some of the tools I enjoy using to build applications.</p>
            <div className='max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-2'>
                {skills.map((tech,index) => (
                    <div key={index} className='flex space-x-4 items-center border border-gray-400 rounded-md'>
                        <div className='bg-gray-400 rounded-sm p-2'>
                            <span className='text-gray-900'>{tech.icon}</span>
                        </div>
                        <h1 className='text-lg text-gray-900 '>{tech.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
