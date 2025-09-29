"use client";

import { IntroductionVideoProps } from '@/types';
import React, { useEffect, useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { HiVideoCamera } from 'react-icons/hi2'

const IntroductionVideo = ({ isVideoVisible }: IntroductionVideoProps) => {
  const [skipTimer, setSkipTimer] = useState(5);
  const [enableExit, setEnableExit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        if (skipTimer > 0) {
            setSkipTimer((prev: number) => (prev - 1));
        }
        if (skipTimer === 1) { setEnableExit(true); }
    }, 1000);
  })
  return (
    <div className='h-full w-full z-99 bg-white/20 backdrop-blur-md top-1/2 left-1/2 -translate-1/2 flex items-center justify-center fixed'>
        <div className='h-2/3 w-1/2 bg-white rounded-2xl shadow-inner p-3 flex flex-col gap-2'>
            <div className='w-full flex justify-between'>
                <h1>Thank you for visiting us! Learn more about us by watching this video.</h1>
                <span className='flex gap-3'>
                    <p>You can skip after {skipTimer} seconds</p>
                    <button 
                        type="button" 
                        className={`text-xl p-0.5 rounded-full ${enableExit ? 'border border-rose-500 text-rose-500' : 'border border-transparent bg-black/20 text-black/40'}`}
                        disabled={!enableExit}
                        onClick={() => isVideoVisible(false)}
                    ><HiOutlineX /></button>
                </span>
            </div>
            <div className='h-full w-full bg-gray-300 rounded-md flex items-center justify-center text-9xl text-gray-600'>
                <HiVideoCamera />
            </div>
        </div>
    </div>
  )
}

export default IntroductionVideo