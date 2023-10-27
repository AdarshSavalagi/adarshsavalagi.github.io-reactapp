import React, { useEffect, useState } from 'react';
import '../App.css'
function FadingDiv() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance between the top of the element and the top of the viewport
      const element = document.getElementById('fadingDiv');
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Adjust the threshold value as needed
      const threshold = viewportHeight * 0.8;

      // Check if the element is in the viewport
      if (elementTop < threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="fadingDiv"
      className={`fade-in ${isVisible ? 'visible' : ''}`}
    >
      Your content here
    </div>
  );
}

export default FadingDiv;
