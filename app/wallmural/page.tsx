"use client";

import { SetStateAction, Suspense } from "react"
import { Header } from "../components"

import Wallmural from "../components/WallMural";
import Footer from "../components/Footer";
export default function WallMural() {
    
    return (

        <>
        <Suspense fallback={<></>}>
       <Header searchValue={""} setSearchValue={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.")
        } }/></Suspense>
       <Wallmural>
        
       </Wallmural>
      <Footer/>
      </>
    )
}