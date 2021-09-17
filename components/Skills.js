import React from 'react'

const Skills = ({ skills }) => {

    return (
        <div className='mx-auto max-w-5xl space-y-4 px-4 md:px-0 py-4'>
            <h1 className='text-gray-900 dark:text-gray-100 text-3xl font-bold'>Skills</h1>
            
            <div className='grid grid-cols-3 gap-2 items-center'>
                {skills.map((tech,index) => (
                    <div key={index} className='flex space-x-4'>
                        <span className='text-white'>{tech.icon}</span>
                        <h1 className='text-xl text-white'>{tech.title}</h1>
                    </div>
                ))}
            </div>

            {/* <div className='md:flex mx-auto py-4'>
                {skills.map((tech, index) => (
                    <div key={index} className='items-center flex mx-auto space-x-4'>
                        <h1 className='text-lg text-gray-800 dark:text-white text-left'>{tech.title}</h1>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Skills
