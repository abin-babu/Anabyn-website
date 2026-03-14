'use client';

import { useState, useEffect } from 'react';

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 600ms total visibility to ensure rapid FCP
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="loader-container" 
      className={isVisible ? '' : 'hidden'}
    >
      <div id="loader" className="flex flex-col items-center">
        <svg id="loader-shield" viewBox="0 0 72 84" fill="none"
             width="90" height="105" xmlns="http://www.w3.org/2000/svg">
          {/* Shield outline — draws itself rapidly */}
          <path id="shield-path"
            d="M36 4L68 22V56C68 66 54 76 36 80C18 76 4 66 4 56V22L36 4Z"
            fill="rgba(27,58,138,0)"
            stroke="#C9A243" strokeWidth="2"
            strokeDasharray="220"
            strokeDashoffset="220"/>
          {/* Handshake lines — appear in quick succession */}
          <path id="shake-1"
            d="M22 44C22 44 28 38 36 38C44 38 50 44 50 44"
            stroke="#C9A243" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="40" strokeDashoffset="40" opacity="0"/>
          <path id="shake-2"
            d="M18 44L30 44"
            stroke="#4A7AE8" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="15" strokeDashoffset="15" opacity="0"/>
          <path id="shake-3"
            d="M42 44L54 44"
            stroke="#4A7AE8" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="15" strokeDashoffset="15" opacity="0"/>
          <circle id="dot-1" cx="26" cy="48" r="2" fill="#C9A243" opacity="0"/>
          <circle id="dot-2" cx="46" cy="48" r="2" fill="#C9A243" opacity="0"/>
        </svg>
        <div id="loader-name" style={{ opacity: 0 }}>
          <span style={{ color: '#C9A243' }}>Anabyn</span> Global Ventures
        </div>
      </div>
    </div>
  );
}
