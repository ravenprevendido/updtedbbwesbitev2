import { motion } from 'framer-motion'
import React from 'react'

const MissionVission = () => {
  return (
    <section  id='mission-and-vision' className=' bg-[#333] z-[1] mt-40 w-full min-h-[100vh] overflow-hidden flex flex-col items-center' style={{
    backgroundImage: "url('/missionbg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',
  }}>
        <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-28 mt-80'>
    {/* mission and vission cards */}
    {/* mission */}
      <motion.div
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        viewport={{once: false}}
        className='relative bg-[#4A4A4A] rounded-lg p-20 text-center shadow-lg flex flex-col items-center justify-start h-full'
      >
        <img src="/missionimage.png" alt="mission" draggable="false" 
          className='absolute top-20 left-0 -translate-y-full rotate-[-40deg] w-[220px] h-auto object-contain z-[-1]'
        />
       
        <h3 className='text-lg font-bold mb-2 mt-4 text-pink-500'>Our Mission</h3>
        
        <p className='text-lg leading-relaxed'>
          To exceed client expectations by delivering innovative printing solutions, exceptional services continuous improvement in everything we do.
        </p>
      </motion.div>
    <div className='relative'>
      <img src="/rrr4.png" alt="background image" width={500} height={500}
        className='absolute right-300 pt-20 -translate-y-1/5  w-full h-[100vh] pointer-events-none select-none hidden md:block opacity-20 z-[-9]'
      />
      <img src="/imgggcolor.png" alt="background image" width={500} height={500}
        className='absolute top-50 left-100 -translate-y-4/8 w-[500px] rotate-[-60deg] h-auto object-contain opacity-70 z-[-1]'
      />
      {/* vission */}
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="relative bg-[#4A4A4A] rounded-lg p-20 text-center shadow-lg flex flex-col justify-start h-full"
        >
          {/* Floating Image */}
          
          <img
            src="/visionimages.png"
            alt="Vision"
            draggable="false"
            className="absolute bottom-0 top-20 right-0 -translate-y-full rotate-[30deg] w-[220px] h-auto object-contain z-[-99]"
          />
          {/* Content */}
          <h3 className="text-lg font-bold mb-2 mt-4">Our Vision</h3>
          <p className="text-lg leading-relaxed">
To become the go-to creative printing partner for businesses nationwide, recognized for reliability, creativity, and quality that inspires clients to recommend us again and again.          </p>
        </motion.div>
          </div>
         </div>
    </section>
  )
}
export default MissionVission
