import React from 'react'
import { motion } from "framer-motion"
function Education() {
  return (
    <>
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>My Education</h1>
      </div>

        <div className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opactity:0,x:-100}}
            transition={{duration:0.5}}
          className="w-full lg:w-1/4">
          <p className='mb-2 text-sm text-neutral-400'>2021-2023</p>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opactity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full max-w-xl lg:w-3/4">
        <h6 className='mb-2 font-semibold'>Master of Computer Application
        </h6>
        <h5 className='text-sm text-purple-100'>Federal Institute Of Science And Technology Angamaly</h5>
        <h5>67%</h5>
        </motion.div>
        </div> 

        <div className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opactity:0,x:-100}}
            transition={{duration:0.5}}
             className="w-full lg:w-1/4">
          <p className='mb-2 text-sm text-neutral-400'>2018-2021</p>
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opactity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full max-w-xl lg:w-3/4">
        <h6 className='mb-2 font-semibold'>Bachelor Of Computer Application
        </h6>
        <h5 className='text-sm text-purple-100'>Al-Ameen College Edathala</h5>
        <h5>65%</h5>
        </motion.div>
        </div> 

        <div className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opactity:0,x:-100}}
           transition={{duration:0.5}}
          className="w-full lg:w-1/4">
          <p className='mb-2 text-sm text-neutral-400'>2016-2018</p>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opactity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full max-w-xl lg:w-3/4">
        <h6 className='mb-2 font-semibold'>HSC | Computer Science
        </h6>
        <h5 className='text-sm text-purple-100'>GHSS Edappally</h5>
        <h5>73%</h5>
        </motion.div>
        </div> 

        <div className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opactity:0,x:-100}}
           transition={{duration:0.5}}
          className="w-full lg:w-1/4">
          <p className='mb-2 text-sm text-neutral-400'>2015-2016</p>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opactity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full max-w-xl lg:w-3/4">
        <h6 className='mb-2 font-semibold'>SSLC
        </h6>
        <h5 className='text-sm text-purple-100'>ACS EMHSS Kaloor</h5>
        <h5>89%</h5>
        </motion.div>
        </div> 
        </>
    
  )
}

export default Education
