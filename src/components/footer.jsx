import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-rose-100 to-rose-200 py-6 rounded-md border-2 border-rose-100'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p className='text-rose-600 mb-4 md:mb-0'>&copy; {new Date().getFullYear()} Nafisa Anzum. All rights reserved.</p>
        <nav>
          <ul className='flex flex-wrap justify-center space-x-4'>
            <li><Link to="/" className="text-rose-600 hover:text-rose-800 font-bold" onClick={() => scrollToSection('timeline')}>Projects</Link></li>
            <li><Link to="/" className="text-rose-600 hover:text-rose-800 font-bold" onClick={() => scrollToSection('home')}>Home</Link></li>
            <li><a href="mailto:nanzum1140@gmail.com" className='text-rose-600 hover:text-rose-800 font-bold'>Contact</a></li>
            <li><a href="https://github.com/aliangelinaaa" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-800 font-bold">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/nafisaanzum/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-800 font-bold">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer