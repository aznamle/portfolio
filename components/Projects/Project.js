import React, { useState, useMemo } from 'react'
import ProjectModal from './ProjectModal'

const Project = ({ project }) => {

    const [open, setOpen] = useState(false)
    const [viewProject, setViewProject] = useState([])

    const openProject = item => {
        setViewProject(item)
        setOpen(true)
    }

    return (
        <div className='mx-auto max-w-3xl grid grid-cols-2 gap-4 py-12 text-white'>
            {project.map(item => (
                <div className='flex items-center text-center mx-auto justify-center border-b pb-4 border-opacity-50' key={item.id}>
                    <div>
                        <h1 className='text-xl'>
                            {item.title}
                        </h1>
                        <p className='text-gray-400'>
                            {item.description}
                        </p>
                    </div>
                    <div>
                        <button 
                            className='bg-gray-700 border-white transition ease-in-out duration-300 hover:bg-gray-800 py-2 px-4 rounded-3xl ml-12' 
                            onClick={() => openProject(item)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
            { <ProjectModal open={open} setOpen={setOpen} item={viewProject} /> }

        </div>
    )
}

export default Project