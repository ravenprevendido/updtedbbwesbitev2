"use client"
import React, { Suspense } from 'react'
import { Header } from '../components'
import ContactPages from '../components/ContactPages'
import Footer from '../components/Footer'

const page = () => {
  
  return (
    <div>
      <Suspense fallback={<></>}>
        <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
              throw new Error('Function not implemented.')
          } }/>
          </Suspense>
          <ContactPages/>
          <Footer/>
    </div>
  )
}


export default page

