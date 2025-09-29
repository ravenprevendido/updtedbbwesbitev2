'use client';

import React, { Suspense, useState } from 'react'
import { Header } from '../components'
import Footer from '../components/Footer'
import Labelpage from '../components/LabelSticker'


const page = () => {
   
  return (
    <div>
  <Suspense fallback={<></>}>
    <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
              throw new Error('Function not implemented.')
          } } />
          </Suspense>
        <Labelpage/>
          <Footer/>
    </div>
  )
}

export default page
