import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top ${isScrolling ? 'scrolling' : ''}`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="scroll-icon" />
          <div className="scroll-progress"></div>
          <div className="button-background"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
