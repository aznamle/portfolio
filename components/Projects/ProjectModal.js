import React, { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

const ProjectModal = ({ open, setOpen, item }) => {

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
                    <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the setOpen contents. */}
                <span className="hidden sm:inline-block sm:align-top sm:h-full" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-100"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-out duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-black rounded-lg border border-gray-600 text-left overflow-hidden shadow-xl transform transition-all sm:my-24 sm:align-bottom max-h-4/5 overflow-y-auto sm:max-w-4xl sm:w-full">
                        <div className="bg-black px-4 pt-0 pb-4 sm:p-6 sm:pb-4">
                        <div className='flex flex-row-reverse'>
                            <button className="text-gray-400 hover:text-gray-700 p-1 transform ease-in-out duration-300" onClick={() => setOpen(false)}>
                                <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                                </svg>
                            </button>
                        </div>
                            <div className="sm:flex justify-between sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-md bg-white sm:mx-0 sm:h-12 sm:w-12">
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
                                    {item.title}
                                </Dialog.Title>
                                
                                <div className="mt-2">
                                <p className="text-sm text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                </div>
                                <div className='p-12'>
                                    <img src='http://localhost:3000/carbnforme.jpg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex">
                        <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-white text-white shadow-sm px-4 py-2 bg-transparent text-base font-medium hover:text-black hover:bg-white sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        >
                        close
                        </button>
                    </div>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ProjectModal