import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='mx-auto dark:bg-gray-900 transition duration-500'>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
