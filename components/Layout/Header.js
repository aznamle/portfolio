import React from 'react'
import Link from 'next/link'

import useDarkMode from '../../utils/useDarkMode';


const Header = () => {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <header className="text-gray-900 dark:text-white body-font">
            <div className="max-w-5xl mx-auto flex flex-wrap py-6 justify-between px-4 flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 dark:text-white  md:mb-0" href="/">
                  <a className="text-2xl font-bold">Nam Le</a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-2">
                <Link className="hover:text-gray-500 dark:hover:text-gray-700 transition duration-300" href="#skills"><a>Skills</a></Link>
                <Link className="hover:text-gray-500 dark:hover:text-gray-700 transition duration-300" href="#projects"><a>Projects</a></Link>
                <Link className="hover:text-gray-500 dark:hover:text-gray-700 transition duration-300" href="#experience"><a>Experience</a></Link>
                <div className='border border-gray-600 dark:border-opacity-0 dark:bg-gray-800 p-1 rounded-full'>
                {colorTheme === 'light' ? 
                 (
                  <svg
                    className="w-6 h-6"
                    onClick={() => setTheme('light')}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    cursor='pointer'
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) :
                (<svg
                    className="w-6 h-6"
                    onClick={() => setTheme('dark')}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    cursor='pointer'
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
                </div>
                </nav>
            </div>


        </header>
    )
}

export default Header