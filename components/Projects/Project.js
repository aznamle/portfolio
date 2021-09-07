import React, { useState, useMemo } from 'react'
import ProjectModal from './ProjectModal'

const Project = ({ project }) => {

    const [open, setOpen] = useState(false)
    const [viewProject, setViewProject] = useState([])
    const [technology, setTechnology] = useState([])
    const [images, setImages] = useState([])

    const openProject = item => {
        setViewProject(item)
        setTechnology(item.technology)
        setImages(item.images)
        setOpen(true)
    }

    return (
        <div className='mx-auto max-w-5xl space-y-8 px-4 md:px-0 py-12'>
            <h1 className='text-gray-100 text-3xl font-bold'>Projects</h1>
            <div className='mx-auto grid md:grid-cols-2 gap-10 px-8 md:px-0 text-white'>
                {project.map(item => (
                    <div className='flex items-center text-left mx-auto justify-center space-x-4' key={item.id}>
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-lg bg-white sm:mx-0 sm:h-16 sm:w-16">
                        </div>
                        <div className='border-b pb-4 border-opacity-50 flex items-center'>
                        <div>
                            <h1 className='font-semibold text-xl'>
                                {item.title} 
                            </h1>
                            <p className='text-gray-400'>
                                {item.subtitle}
                            </p>
                        </div>
                        <div>
                            <button 
                                className='bg-gray-700 transition ease-in-out duration-300 hover:bg-gray-800 py-2 px-5 rounded-3xl ml-4 md:ml-12' 
                                onClick={() => openProject(item)}
                            >
                                View
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
                { <ProjectModal open={open} setOpen={setOpen} item={viewProject} technology={technology} images={images} /> }
            </div>
        </div>
    )
}

export default Project