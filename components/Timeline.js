import React from 'react'

const Timeline = ({ props, head }) => {
    const itemslen = props.length

    return (
        <div className="md:w-1/2">
        <h1 className='text-gray-900 dark:text-gray-100 text-3xl font-bold'>{head}</h1>
            <div className='py-6'>
            {props.map((props, i ) => (
                <div key={props.id} className="flex relative pb-10">
                    <div className="h-full w-3 mt-2  absolute inset-0 flex items-center justify-center">
                        <div className={`h-full ${ (itemslen === i + 1) ? 'w-0' : 'w-1' } bg-gray-200 dark:bg-gray-600 pointer-events-none`}></div>
                    </div>
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm">
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className=" text-lg text-gray-900 dark:text-gray-100">
                            {props.title}
                        </h2>
                        <h2 className="text-md text-gray-600 dark:text-gray-200">
                            {props.subtitle}
                        </h2>
                        <p className=" leading-relaxed text-gray-600 dark:text-gray-400">
                            {props.time}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Timeline