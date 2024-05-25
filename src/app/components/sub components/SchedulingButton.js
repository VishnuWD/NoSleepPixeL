"use client";
import React, { useEffect, useRef } from 'react';

const SchedulingButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const scriptId = 'google-calendar-scheduling-button-script';

    const loadScript = (src, onLoad) => {
      // Check if the script is already present
      let script = document.getElementById(scriptId);
      if (script) {
        onLoad();
        return;
      }

      script = document.createElement('script');
      script.id = scriptId;
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.body.appendChild(script);
    };

    const initializeButton = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ15dnOmFIG5sbQWlPsi_8OxGb-8ia1cnTWqNO6koYoffE5_pvDwy0Gt2nDqhLneZn0yjyBw7Tnu?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: buttonRef.current,
        });
      }
    };

    loadScript('https://calendar.google.com/calendar/scheduling-button-script.js', initializeButton);
  }, []);

  return <div className='hidden' ref={buttonRef} />;
};

export default SchedulingButton;
