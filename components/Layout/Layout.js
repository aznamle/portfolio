import React from 'react'

import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='mx-auto bg-white dark:bg-black transition duration-500'>
        <Head>
            <title>Nam Le</title>
            <meta name="description" content="Nam Le portfolio page" />
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👌</text></svg>"
            />
        </Head>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
