import React from 'react'

const Header = () => {
    return (
        <header class="text-white body-font">
            <div class="max-w-5xl mx-auto flex flex-wrap py-6 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="text-xl">Tailblocks</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="hover:text-gray-900">First Link</a>

                </nav>
            </div>
        </header>
    )
}

export default Header