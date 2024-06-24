import React from 'react'
import img1 from '../assets/realestate.png'
import img2 from '../assets/chatapp.png'
import img3 from '../assets/scoops.png'
import { FaCode } from 'react-icons/fa'
import '../index.css'
import { motion } from "framer-motion"

function Projects() {
  return (
    <>
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
    </div>
    <div className='mb-8 flex flex-wrap lg:justify-center'>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opactity:0,x:-100}}
       transition={{duration:0.5}}
      className='w-full lg:w-1/4'>
      <img 
      className='mb-6 rounded'
      width={300}
      height={150}
      src={img1}></img>
      </motion.div>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opactity:0,x:100}}
      transition={{duration:0.5}}
      className='w-full max-w-xl lg:w-3/4'>
      <h5 className='text-2xl'>RealEstate WebApplication</h5>
      <p>Serenity Estates is a real estate web application developed using the MERN stack . This application allows users to browse and book their favorite properties seamlessly</p>
      <a
      className="border rounded wide mt-2 flex items-center justify-center"
      href="https://github.com/VishnuSankarIP/RealestateWeb"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaCode />
    </a>
      </motion.div>
    </div>

    <div className='mb-8 flex flex-wrap lg:justify-center'>
      <motion.div
       whileInView={{opacity:1,x:0}}
       initial={{opactity:0,x:-100}}
       transition={{duration:0.5}}
      className='w-full lg:w-1/4'>
      <img
      className='mb-6 rounded'
      width={300}
      height={150}
      src={img2}></img>
      </motion.div>
      <motion.div 
      whileInView={{opacity:1,x:0}}
         initial={{opactity:0,x:100}}
         transition={{duration:0.5}}
         className='w-full max-w-xl lg:w-3/4'>
      <h5 className='text-2xl'>NexaChat App</h5>
      <p>A real-time Chat Application using React,Redux and Socket.io.Skilled in creating responsive user interface and managing application state with Redux</p>
      <a
      className="border rounded wide mt-2 flex items-center justify-center"
      href="https://github.com/VishnuSankarIP/Chat-App"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaCode />
    </a>
      </motion.div>
    </div>

    <div className='mb-8 flex flex-wrap lg:justify-center'>
      <motion.div
       whileInView={{opacity:1,x:0}}
       initial={{opactity:0,x:-100}}
       transition={{duration:0.5}}
      className='w-full lg:w-1/4'>
      <img
      className='mb-6 rounded'
      width={300}
      height={150}
      src={img3}></img>
      </motion.div>
      <motion.div
       whileInView={{opacity:1,x:0}}
       initial={{opactity:0,x:100}}
       transition={{duration:0.5}}
      className='w-full max-w-xl lg:w-3/4'>
      <h5 className='text-2xl'>Arctic scoops website</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate eveniet quas! Enim, perferendis minus fuga quaerat ipsam perspiciatis libero! Aliquid inventore quidem laborum, harum ut quae amet earum facere.</p>
      <a
      className="border rounded wide mt-2 flex items-center justify-center"
      href=" https://github.com/VishnuSankarIP/React-parallax-website"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaCode />
    </a>
      </motion.div>

     
    </div>
    </>
    
  )
}

export default Projects
