import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedComponent = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.to(headingRef.current, {
      x: -200,   
      opacity: 1, 
      duration: 1.5, 
      ease: "power2.out", 
      scale:1,
      color:"blue"
    });
  }, []);

  return (
    <div>
      <h1 ref={headingRef}>Hello, GSAP in React!</h1>
    </div>
  );
};

export default AnimatedComponent;
