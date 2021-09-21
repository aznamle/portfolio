import React from 'react'

import {
    FaNodeJs,
    FaReact,
    FaJs,
    FaWordpressSimple,
  } from "react-icons/fa";

import {
    SiNextDotJs,
    SiTailwindcss
} from "react-icons/si";

import {
    GrGraphQl,
} from "react-icons/gr";

const Skills = ({ }) => {

    const skills = [
        {
            id: 1,
            title: "Javascript",
            icon: <FaJs fontSize='30px' />,
        },
        {
            id: 2,
            title: "React",
            icon: <FaReact fontSize='30px' />,
        },
        {
            id: 3,
            title: "Next.js",
            icon: <SiNextDotJs fontSize='30px' />,
        },
        {
            id: 4,
            title: "Node.js",
            icon: <FaNodeJs fontSize='30px' />,
        },
        {
            id: 5,
            title: "Tailwind CSS",
            icon: <SiTailwindcss fontSize='30px' />,
        },
        {
            id: 6,
            title: "GraphQL",
            icon: <GrGraphQl fontSize='30px' />,
        },
    ]

    return (
        <div className='mx-auto max-w-5xl space-y-4 px-4 md:px-0 py-4'>
            <h1 className='text-gray-900 dark:text-gray-100 text-3xl font-bold'>Skills</h1>
            
            <div className='max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-2'>
                {skills.map((tech,index) => (
                    <div key={index} className='flex space-x-4 items-center border border-gray-300 border-opacity-75 dark:border-gray-600 rounded-md'>
                        <div className='bg-gray-300 dark:bg-gray-600 p-2'>
                            <span className='text-gray-900 dark:text-white'>{tech.icon}</span>
                        </div>
                        <h1 className='text-lg text-gray-900 dark:text-white'>{tech.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
