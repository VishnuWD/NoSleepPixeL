"use client"
import React, { useEffect } from 'react'

function Header() {
  // script.js

  useEffect(() => {
    let lastScrollTop = 0;
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-60px'; 
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
  
  
  }, [])
  


  return (
    <>
      <nav id="nav">
        <input className='peer hidden' type="checkbox" name="" id="check" />
        <label htmlFor="check" className=' z-30'>
          <div className='bg-white w-[5vmin] h-[2px] mb-1'></div>
          <div className='bg-white w-[7.7vmin] h-[2px] mb-1'></div>
          <div className='bg-white w-[11vmin] h-[2px] mb-1'></div>
        </label>
        <div className='nav__list fixed blur-3xl bg-blend-normal hidden h-0 w-0 peer-checked:block left-[-20vw] top-[-10vh] peer-checked:animate-[navList_0.4s_forwards] z-20 bg-[#EDBFFF] rounded-[0_0_500px_30px]'>
          <p>something</p>
        </div>
        <a href="/"><h2 className='z-30'>NS Pixel<p>🌙</p></h2></a>

        <a className='z-30' href="/#FOOTER">
          <h4>Contact</h4>
        </a>
      </nav>
      
    </>
  )
}

export default Header