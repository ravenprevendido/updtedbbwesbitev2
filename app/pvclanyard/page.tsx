'use client';
import React, { Suspense } from 'react'
import { Header } from '../components';
import PvcLanyard from '../components/PvcLanyard';
import Footer from '../components/Footer';

const page = () => {
  
  return (
    <div>
      <Suspense fallback={<></>}>
      <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.');
      } }/>
      </Suspense>
      <PvcLanyard/>
      <Footer/>
    </div>
  )
}

export default page
