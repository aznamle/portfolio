import React from 'react'

const Header = () => {
    return (
        <header className="text-white body-font">
            <div className="max-w-5xl mx-auto flex flex-wrap py-6 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <span className="text-xl">Nam Le</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-2">
                <a className="hover:text-gray-900">Skills</a>
                <a className="hover:text-gray-900">Projects</a>
                <a className="hover:text-gray-900">Experience</a>
                </nav>
            </div>
        </header>
    )
}

export default Header