
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// // import './Home.css'; // Import custom CSS for additional styling

// const Home = () => {
//   return (
//     <section id="home" className="hero d-flex align-items-center">
//       <div className="container text-center">
//         <h1 className="mb-4 display-1 fw-bold">Wassim Yaich</h1>
//         <h2 className="mb-4 h2">Full-Stack Developer & Data Analyst</h2>
//         <p className="mb-5 lead">
//           Passionate about creating robust web applications and deriving insights from data.
//         </p>
//         <Link to="/projects" className="btn btn-primary btn-lg">
//           View My Work <FaArrowRight className="ms-2" />
//         </Link>
//       </div>
//       <div className="hero-image">
//         {/* Optional: Add a background image or illustration */}
//       </div>
//     </section>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
// import { ArrowRight } from 'lucide-react';
const texts = ["Full-Stack Developer", "Data Analyst", "AI Enthusiast", "Tech Explorer"];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50); // Faster deletion speed
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // When finished typing or deleting
    if (!isDeleting && displayedText === fullText) {
      setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="container text-center">
        <h1 className="mb-4 display-1 fw-bold ">Wassim Yaich</h1>

        {/* Typewriter effect for rotating text */}
        <h2 className="mb-4 h2">
          {displayedText}
          <span className="cursor" style={{ borderRight: '2px solid black' }}></span>
        </h2>

        <p className="mb-5 lead">
          Passionate about creating robust web applications and deriving insights from data.
        </p>
        <Link to="/projects" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center' }}>
  View My Work <FaArrowRight className="ms-2" />
</Link>
      </div>

      <div className="hero-image">
        {/* Optional: Add a background image or illustration */}
      </div>
    </section>
  );
};

export default Home;
