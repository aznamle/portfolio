import React, { useState, useMemo } from 'react'
import ProjectModal from './ProjectModal'

import useSWR from 'swr'

const Project = ({ project }) => {

    const [open, setOpen] = useState(false)
    const [viewProject, setViewProject] = useState([])

    const openProject = item => {
        setViewProject(item)
        setOpen(true)
    }

    return (
        <div className='mx-auto max-w-2xl grid grid-cols-2 gap-4 py-12 text-white'>
            {project.map(item => (
                <div className='flex text-center mx-auto justify-center space-y-2 border-b pb-4 border-opacity-50' key={item.id}>
                    {item.title}
                    <div>
                        <button className='bg-gray-700 border-white transition ease-in-out duration-300 hover:bg-gray-800 py-1 px-3 rounded-3xl' onClick={() => openProject(item)}>View</button>
                    </div>
                </div>
            ))}
            { <ProjectModal open={open} setOpen={setOpen} item={viewProject} /> }

        </div>
    )
}

export default Project


//align-bottom bg-black rounded-lg border border-gray-600 text-left overflow-hidden shadow-xl transform transition-all sm:my-24 sm:align-bottom max-h-4/5 overflow-y-auto sm:max-w-4xl sm:w-full