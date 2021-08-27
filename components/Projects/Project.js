import React, { useState, useMemo } from 'react'
import ProjectModal from './ProjectModal'

const Project = () => {

    const [open, setOpen] = useState(false)
    const [viewProject, setViewProject] = useState(null)

    const project = [
        {
            id: 1,
            title: "title1",
            description: "des1"
        },
        {
            id: 2,
            title: "title2",
            description: "des2"
        },
    ]

    const openProject = item => {
        setViewProject(item)
        setOpen(true)
    }

    return (
        <div className='text-white'>
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
