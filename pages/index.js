import React, { useState } from 'react'


import Head from 'next/head'
import Image from 'next/image'

import Intro from '../components/Intro'
import Modal from '../components/Modal'

import { profile } from '../public/data/common'

export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <Head>
        <title>Nam Le</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={()=> setOpen(true)}>hello</button>

      { <Modal open={open} setOpen={setOpen}/>}
    </div>
  )
}
