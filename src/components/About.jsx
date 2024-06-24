import React from 'react'
import { motion } from "framer-motion"
function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opactity:0,x:-100}}
            transition={{duration:0.5}}
            className="flex items-center justify-center">
               <img  src='https://cdn3.iconfinder.com/data/icons/3d-illustration-nft-technology/512/Developer_Male.png' ></img>
            </motion.div>
        </div>
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opactity:0,x:100}}
         transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:pe-5">
        <div className="flex justify-center lg:justify-start">
        <p className='text-center  lg:text-left lg:mt-20'>
            I am an MCA graduate specializing in Computer Application, proficient in a variety of programming languages and technologies. Experienced in HTML, CSS, JavaScript, React, Node, Express, MongoDB. Demonstrates strong leadership qualities and effective communication skills
        </p>
       
    </div>
    <div className="flex justify-center lg:justify-start">
        <p className=' text-center  lg:text-left lg:mt-5'>
           Email: <span className='text-sky-200'>vishnusankarip18@gmail.com</span>
           
        </p>
       
    </div>
    <div className="flex justify-center lg:justify-start">
        <p className=' text-center  lg:text-left lg:mt-5 ' >
        Place: <span className='text-sky-200'> Ernakulam, India-682024</span>
           
        </p>
       
    </div>
</motion.div>

      </div>
    </div>
  )
}

export default About
