import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

import Loader from '../Loader'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Scrollbar,
    Pagination
  } from 'swiper';
import 'swiper/css';
import "swiper/css/scrollbar";
import "swiper/css/pagination";


SwiperCore.use([Scrollbar, Pagination]);

import {
    SiGithub,
} from "react-icons/si";


const ProjectModal = ({ open, setOpen, item, technology, images }) => {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-2 px-2 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 transition-opacity" />
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
                    <div className="inline-block mx-auto align-bottom bg-white dark:bg-gray-900 rounded-lg border border-gray-500 dark:border-gray-600 
                        text-left overflow-hidden shadow-xl transform transition-all md:mt-2 overflow-y-auto w-auto md:max-w-5xl">
                        <div className="bg-white dark:bg-gray-900 px-4 pb-4 ">
                        <div className='flex flex-row-reverse mt-2'>
                            <button className="text-gray-900 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-500 transform ease-in-out duration-300" onClick={() => setOpen(false)}>
                                <svg
                                    className="w-8 h-8 p-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 flex items-center justify-center h-16 md:h-24 w-16 md:w-24 rounded-md bg-black dark:bg-white sm:mx-0 ">
                                <p className='text-white dark:text-gray-900 text-4xl font-bold'>{item.icon}</p>
                            </div>
                            <div className="mt-1 ml-4 text-left">
                                <Dialog.Title as="h3" className="text-2xl leading-6 font-bold text-gray-900 dark:text-white">
                                    {item.title}
                                </Dialog.Title>
                                <div className='py-2'>
                                    <p className='text-gray-700 dark:text-gray-300'>{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex mx-auto text-center space-x-2 py-4'>
                                {!technology && <Loader />}
                                {technology.map((tech, index) => (
                                    <div key={index} className='rounded-xl border border-opacity-50 border-gray-900 dark:border-white text-gray-900 dark:text-white shadow-sm px-3 py-2 '>
                                        {tech}
                                    </div>
                                ))}
                                </div>
                        <div className="mt-2 h-5/6 border-t border-gray-300 dark:border-gray-600 ">
                            <Swiper
                                spaceBetween={25}
                                freeMode={true}
                                slidesPerView={1.1}
                                scrollbar={{
                                    "hide": true
                                  }}
                            >
                                {!images && <Loader />}
                                {(images.map((image, index) =>
                                    <SwiperSlide key={index} className='py-4'>
                                        <Image className='rounded-xl' src={image} alt="image" layout="intrinsic" width='1920' height='1080'/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='md:flex md:w-5/6 py-4 space-y-4 space-x-2'>
                            <p className="text-gray-700 dark:text-gray-300 text-md md:text-xl">
                                {item.description}
                            </p>
                        </div>
                        <div className='space-x-2 mx-auto items-center'>
                            <button className='bg-gray-200 dark:bg-gray-700 transition ease-in-out duration-300 
                                hover:bg-gray-400 dark:hover:bg-gray-800 py-2 px-10 rounded-3xl'
                            >
                                <a className='text-md' href={item.url} target="_blank" rel="noreferrer">Visit</a>
                            </button>
                            <button className='bg-gray-200 dark:bg-gray-700 transition ease-in-out duration-300 
                                hover:bg-gray-400 dark:hover:bg-gray-800 py-2 px-8 rounded-3xl'
                            >
                                <a className='text-md' href={item.github_url} target="_blank" rel="noreferrer">Github</a>
                            </button>
                        </div>

                    </div>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ProjectModal