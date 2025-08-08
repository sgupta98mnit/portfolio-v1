import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { personalInfo } from '../data/portfolioData.jsx';

const LandingAnimation = ({ onComplete }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const letters = overlayRef.current.querySelectorAll('.landing-letter');

    anime
      .timeline({ easing: 'easeOutExpo', complete: onComplete })
      .add({
        targets: letters,
        translateZ: [400, 0],
        rotateX: [90, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 1200,
      })
      .add({
        targets: overlayRef.current,
        opacity: 0,
        duration: 600,
        easing: 'easeInOutQuad',
      });
  }, [onComplete]);

  const chars = personalInfo.name.split('');

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center bg-primary-bg z-50"
      style={{ perspective: '1000px' }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-accent-1">
        {chars.map((ch, idx) => (
          <span
            key={idx}
            className="landing-letter inline-block"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {ch}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default LandingAnimation;
