"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

function Header() {
  // script.js


  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById('nav');

    window.addEventListener('scroll', function () {
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
        <label htmlFor="check" className='z-30 cursor-pointer '>
          <div className='bg-white w-[35px] h-[2px] mb-1'></div>
          <div className='bg-white w-[53px] h-[2px] mb-1'></div>
          <div className='bg-white w-[76px] h-[2px] mb-1'></div>
        </label>

        <div className='fixed  hidden peer-checked:block left-[5vmin] text-[0vmin] top-[10vmin] select-none shadow-lg rounded-xl  peer-checked:animate-[navList_0.2s_forwards]'>
          <div className='flex flex-col bg-[#0F0D0D]  gap-4  border rounded-xl p-[5vmin_7vmin] '>
    
            <Link className='hover:underline tracking-widest' href="/">Home</Link>
            <Link className='hover:underline tracking-widest' href="about">About</Link>
            <Link className='hover:underline tracking-widest' href="plans">Plans</Link>
          </div>
        </div>

        <Link href="/"><h2 className='z-30'>NS Pixel<p>🌙</p></h2></Link>

        <a className='z-30' href="/#FOOTER">
          <h4>Contact</h4>
        </a>
      </nav>

    </>
  )
}

export default Header