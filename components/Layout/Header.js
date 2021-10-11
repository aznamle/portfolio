import { useEffect, useState } from "react";
import Link from 'next/link'
import { useTheme } from "next-themes";

import {
  FiSun
} from 'react-icons/fi'

import {
  FaMoon
} from 'react-icons/fa'

const Header = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const toggleDarkMode = () => {
      if (!isMounted) return null;

      const currentTheme = theme === 'system' ? systemTheme : theme;

      if(currentTheme === 'dark') {
        return (
          <FiSun fontSize='20px' onClick={()=>setTheme('light')} />
        )
      } else {
        return (
          <FaMoon fontSize='20px' onClick={()=>setTheme('dark')} />
        )
      }
    }

    return (
        <header className="text-gray-900 dark:text-white body-font">
            <div className="max-w-5xl mx-auto flex flex-wrap py-6 justify-between px-4 flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 dark:text-white  md:mb-0" href="/">
                  <a className="text-2xl font-bold">Nam Le</a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-2">
                {/* <Link className="hover:text-gray-500 dark:hover:text-gray-700 transition duration-300" href="#skills"><a>Skills</a></Link>
                <Link className="hover:text-gray-500 dark:hover:text-gray-700 transition duration-300" href="#projects"><a>Projects</a></Link>
                <Link className="hover:text-gray-500 dark:hover:text-gray-700 transition duration-300" href="#experience"><a>Experience</a></Link> */}
                  <div className='border border-gray-600 dark:border-opacity-0 dark:bg-gray-700 p-2 rounded-full transition duration-100'>
                    {toggleDarkMode()}
                  </div>
                </nav>
            </div>


        </header>
    )
}

export default Header