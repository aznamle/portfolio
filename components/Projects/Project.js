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
        <div className='text-white'>
            {project.map(item => (
                <div className='text-center mx-auto justify-center' key={item.id}>
                    {item.title}
                    <div>
                        <button onClick={() => openProject(item)}>View</button>
                    </div>
                </div>
            ))}
            { <ProjectModal open={open} setOpen={setOpen} item={viewProject} /> }

        </div>
    )
}

export default Project
