import React from 'react'

const Experience = ({ experience }) => {

    const itemslen = experience.length

    return (
        <div className="max-w-5xl mx-auto py-6 px-4 md:px-0">
        <h1 className='text-gray-900 dark:text-gray-100 text-3xl font-bold'>Experience</h1>
        <div className='py-6'>
        {experience.map((experience, i ) => (
                <div key={experience.id} className="flex relative pb-10">
                    <div className="h-full w-3 mt-2  absolute inset-0 flex items-center justify-center">
                        <div className={`h-full ${ (itemslen === i + 1) ? 'w-0' : 'w-1' } bg-gray-200 dark:bg-gray-600 pointer-events-none`}></div>
                    </div>
                    <div class="flex-shrink-0 w-3 h-3 rounded-full mt-2 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm">
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-xl text-gray-900 dark:text-gray-200 tracking-wider">
                            {experience.role}
                        </h2>
                        <h2 className="font-medium title-font text-lg text-gray-600 dark:text-gray-400 tracking-wider">
                            {experience.company}
                        </h2>
                        <p className="font-light leading-relaxed text-gray-600 dark:text-gray-400">
                            {experience.time}
                        </p>
                    </div>
                </div>
        ))}
        </div>
    </div>
    )
}

export default Experience
