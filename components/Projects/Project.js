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
        <div className='items-center text-white'>
            {project.map(item => (
                <div key={item.id}>
                    {item.title}
                    <button onClick={() => openProject(item)}>View</button>
                </div>
            ))}
            { <ProjectModal open={open} setOpen={setOpen} item={viewProject} /> }

        </div>
    )
}

export default Project
