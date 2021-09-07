import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='mx-auto bg-gray-900'>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
