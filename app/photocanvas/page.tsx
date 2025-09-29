'use client';


import React, { Suspense, useState } from 'react'
import { Header } from '../components'
import Photopage from '../components/Photopage'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
    <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.')
      } } />
      </Suspense>
      <Photopage/>
      <Footer/>
    </div>
  )
}

export default page



