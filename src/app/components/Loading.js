"use client"
import React from 'react'
import { useEffect } from "react";

function Loading() {

  useEffect(() => {
    const loader = document.querySelector(".loader__container");

    const handleWindowLoad = () => {
      loader.style.display = 'none';
    };

    window.onload = handleWindowLoad; // Attach the load event listener

    return () => {
      window.onload = null; // Remove the load event listener
      loader.style.display = 'none'; // Show the loader again
    };
  }, []);

  return (
    <div className="loader__container">
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>

  )
}

export default Loading