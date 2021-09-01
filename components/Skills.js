import React from 'react'

const Skills = ({ skills }) => {

    return (
        <div className='max-w-5xl mx-auto py-4 space-y-4'>
            <h1 className='text-gray-100 text-3xl font-bold'>Skills</h1>
            <div className=' mx-auto flex space-x-4'>
            {skills.map((skill, index) =>
                <div className='text-lg text-center text-white'>
                    <p>{skill.title}</p>
                </div>
            )}
            </div>
        </div>
    )
}

export default Skills
