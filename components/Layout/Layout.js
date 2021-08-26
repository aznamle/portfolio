import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='mx-auto bg-black h-screen'>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
