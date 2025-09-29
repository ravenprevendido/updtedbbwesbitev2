import { motion } from 'framer-motion'
import React from 'react'
import MissionVission from './MissionVission'

const AboutPages = () => {
  return (
    <section className='min-h-[100vh]  text-white flex flex-col relative items-center  overflow-hidden'>
         <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, ease: 'easeOut'}}
          className='relative w-full max-w-10xl flex flex-col items-center '
        >
         <img
        src="/vsvissionabout.png"
        alt="Hand"
        className="absolute right-0 top-0 w-[1000px] opacity-70 pointer-events-none select-none hidden md:block"
        style={{ zIndex: 0 }}
      />
      </motion.div>
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}} 
          transition={{duration: 0.8, ease: 'easeOut'}}
          className='relative w-full max-w-7xl flex flex-col items-center '
        >
       <div className='mt-20 '>
          <img
            alt='Hnad'
            src="/aboutimage1.png"
            className='absolute -top-[2] rotate-[10deg] right-2/4 -translate-x-1/2'
          />
        <div className='relative bg-[#4a4a4a]  mt-70 p-6 md:p-10 max-w-3xl rounded-lg text-white text-center shadow-lg'>
          <p className='text-xl  leading-relaxed'>Founded in 2015, Burnbox Printing has grown from a small printing shop into one of the most trusted partners for businesses and individuals in signage fabrication, large-format printing, and creative branding solutions. We don't just print—we bring ideas to life, transforming concepts into powerful visuals that build brands, attract customers, and leave lasting impressions.</p>
        </div>
    </div>
   </motion.div>
   <MissionVission/>
    </section>
  )
}

export default AboutPages
