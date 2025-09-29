"use client";

import React, { Suspense } from 'react'
import { Header } from '../components'
import ServicesPages from '../components/ServicesPages';
import Footer from '../components/Footer';
import ServicesInfo from '../components/ServiceInfo';
import { useState } from 'react';

const page = () => {
 const [searchValue, setSearchValue] = useState("");
 
  return (
    <>
    <Suspense fallback={<></>}>
    <Header searchValue={searchValue} setSearchValue={setSearchValue} />
         <ServicesInfo searchValue={searchValue} /></Suspense>
          <Footer />
    </>
  )
}


export default page