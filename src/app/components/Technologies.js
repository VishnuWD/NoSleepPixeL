import React from 'react'
import Icons from './sub components/Icons'

export default function Technologies() {
  return (
    <section className='h-screen flex flex-col justify-center items-center gap-[10vmin]'>
      <h2 className='text-[8vmin] text-center px-[10vmin]'>We Use Latest & Trending Technologies</h2>
      <section className='flex gap-[8vmin] justify-center flex-wrap px-[10vmin]'>
        <Icons name={"HTML"} />
        <Icons name={"CSS"} />
        <Icons name={"JavaScript"} />
        <Icons name={"React.js"}/>
        <Icons name={"Next.js"} />
        <Icons name={"Bootstrap"} />
        <Icons name={"Tailwind CSS"} />
        <Icons name={"GSAP"} />
        <Icons name={"Styled Components"}/>
        <Icons name={"Node.js"} />
        <Icons name={"Express.js"}/>
        <Icons name={"PostgreSQL"}/>
        <Icons name={"MongoDB"}/>
      </section>
    </section>
  )
}
