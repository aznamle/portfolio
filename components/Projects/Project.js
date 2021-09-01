import React, { useState, useMemo } from 'react'
import ProjectModal from './ProjectModal'

const Project = ({ project }) => {

    const [open, setOpen] = useState(false)
    const [viewProject, setViewProject] = useState([])
    const [technology, setTechnology] = useState([])

    const openProject = item => {
        setViewProject(item)
        setTechnology(item.technology)
        setOpen(true)
    }

    return (
        <div className='mx-auto max-w-4xl grid grid-cols-2 gap-10 py-12 text-white'>
            {project.map(item => (
                <div className='flex items-center text-left mx-auto justify-center border-b pb-4 border-opacity-50' key={item.id}>
                    <div>
                        <h1 className='text-xl'>
                            {item.title}
                        </h1>
                        <p className='text-gray-400'>
                            {item.subtitle}
                        </p>
                    </div>
                    <div>
                        <button 
                            className='bg-gray-700 transition ease-in-out duration-300 hover:bg-gray-800 py-2 px-5 rounded-3xl ml-12' 
                            onClick={() => openProject(item)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
            { <ProjectModal open={open} setOpen={setOpen} item={viewProject} technology={technology} /> }

        </div>
    )
}

export default Project