import React from 'react'

function Icons({name}) {
  return (
    <div className='flex flex-col items-center gap-[1.5vmin]'>
        <img className={`h-[10vmin] ${ name == "React.js" ? "animate-[spin_10s_linear_infinite]" : ""}`} height={200} src={`icons/${name}.svg`} alt={`${name} icon`} title={name}/>
        <p className='text-[3vmin]'>{name}</p>
    </div>
  )
}

export default Icons