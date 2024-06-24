import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function Contact() {
  return (
    <>
      <div className='border-b border-neutral-900 pb-20' >
        <h1 className='my-20 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
          <p className='my-4'>
            Thank You For Visiting My Personal Portfolio Website.Feel Free To Drop An Email, Or Contact Me On Any Of The Social Platforms
          </p>
          <div className="btn flex items-center justify-center" >
            <a
              href="mailto:your.email@example.com"
              className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded flex items-center justify-center"
            >
              <pre className="m-0">Contact me</pre>
            </a>
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
        </div>
      </div>
    </>
  )
}

export default Contact
