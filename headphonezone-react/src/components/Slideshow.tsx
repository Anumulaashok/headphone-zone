import React, { useState, useEffect } from 'react';
import { slideshowsData } from '../services/dataStorage'; // Assuming dataStorage.ts exports slideshowsData

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideshowsData.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  if (!slideshowsData || slideshowsData.length === 0) {
    return <div>Loading slideshow...</div>; // Or some fallback UI
  }

  const currentSlide = slideshowsData[currentIndex];

  // Determine if the image needs to be flipped
  const imageStyle: React.CSSProperties = {
    width: '100%',
    display: 'block',
    transform: (currentIndex === 2 || currentIndex === 4) ? 'scaleX(-1)' : 'none', // Apply conditional transform
    transition: 'transform 0.5s ease', // Optional: add a smooth transition
  };

   // Basic inline styles for positioning text over the image, similar to original
   const textContainerStyle: React.CSSProperties = {
      position: 'absolute',
      top: '37%', // Approximation from original CSS/JS
      left: '7%', // Approximation from original CSS/JS
      color: 'white', // Assuming white text
      width: '45%', // Approximation from original CSS/JS
      textAlign: 'left', // Assuming left alignment
      zIndex: 1, // Ensure text is above the image
   };

  return (
    // The outer container div with id="slideshow" should be relative for absolute positioning of text
    <div id="slideshow" style={{ position: 'relative', lineHeight: 1, fontWeight: 'bold', fontFamily: '"Zurich Extended", sans-serif' }}>
      <img src={currentSlide.image1} alt={currentSlide.h} style={imageStyle} />
      <div style={textContainerStyle}>
         {/* Using inline styles for simplicity, consider CSS modules or styled-components later */}
         <h1 style={{ fontSize: '55px', fontWeight: 800, margin: 0, marginBottom: '25px' }}>{currentSlide.h}</h1>
         <p style={{ margin: 0, marginBottom: '25px', fontSize: '16px', fontWeight: 'normal' }}>{currentSlide.p}</p>
         {/* Removed the button as it wasn't in the original dynamic part */}
      </div>
    </div>
  );
};

export default Slideshow;
