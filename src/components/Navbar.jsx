import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function Navbar() {
  return (
   <>
   <nav className= ' mb-20  flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        {/* <img src={logo} alt='logo'></img> */}
        <h1 className='mx-20 '><b>VS</b></h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a
        href="https://www.linkedin.com/in/vishnusankarip/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/VishnuSankarIP"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
   </nav>

   </>
  )
}

export default Navbar
