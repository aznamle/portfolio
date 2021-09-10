import React, { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import ScrollContainer from 'react-indiana-drag-scroll'


const ProjectModal = ({ open, setOpen, item, technology, images }) => {
      
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the setOpen contents. */}
                <span className="hidden sm:inline-block sm:align-top sm:h-full" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-out duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-600 text-left overflow-hidden shadow-xl transform transition-all my-24 sm:align-bottom max-h-4/5 overflow-y-auto max-w-4xl">
                        <div className="bg-white dark:bg-gray-900 px-4 pb-4 ">
                        <div className='flex flex-row-reverse mt-2'>
                            <button className="text-gray-200 hover:text-gray-500 transform ease-in-out duration-300" onClick={() => setOpen(false)}>
                                <svg
                                    className="w-8 h-8 p-1 bg-gray-700 rounded-full"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-md bg-white sm:mx-0 ">
                            </div>
                            <div className="mt-3 ml-4 text-left">
                                <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-white">
                                    {item.title}
                                </Dialog.Title>
                                <div className='flex mx-auto text-center space-x-2 py-4'>
                                {technology.map((tech, index) => (
                                    <div key={index} className='rounded-xl border border-opacity-50 text-white shadow-sm px-3 py-2 '>
                                        {tech}
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                                <ScrollContainer className="flex mx-auto overflow-auto">
                                    <div className='flex mx-auto flex-row'>
                                    {images.map((image, index) =>
                                    <div key={index} className='py-4'>
                                    <Image className='rounded-md' src={image} alt="image" width={1280} height={720} />
                                        </div>
                                    )}
                                    </div>
                                    </ScrollContainer>   
                        </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {item.description}
                                </p>
                    </div>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ProjectModal