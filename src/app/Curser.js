"use client"
import React, { useEffect } from 'react'


function Curser() {

    useEffect(() => {
        var crsr = document.querySelector(".cursor")
        document.onmousemove = (dets) => {
            crsr.style.left = dets.x + "px"
            crsr.style.top = dets.y + "px"
        }
    }, [])


    return (
        <div className="cursor"></div>
    )
}

export default Curser