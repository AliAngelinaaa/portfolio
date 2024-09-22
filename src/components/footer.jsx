import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-rose-100 py-6 rounded-md border-2 border-rose-100'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p className='text-rose-600 mb-4 md:mb-0'>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <nav>
          <ul className='flex flex-wrap justify-center space-x-4'>
            <li><a href="#" className='text-rose-600 hover:text-rose-800'>Projects</a></li>
            <li><a href="#" className='text-rose-600 hover:text-rose-800'>About</a></li>
            <li><a href="#" className='text-rose-600 hover:text-rose-800'>Contact</a></li>
            <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='text-rose-600 hover:text-rose-800'>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/nafisaanzum/" target="_blank" rel="noopener noreferrer" className='text-rose-600 hover:text-rose-800'>LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer