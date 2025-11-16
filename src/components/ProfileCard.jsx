'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ProfilePhoto from './ProfilePhoto';
import SocialButtons from './SocialButtons';
import './ProfileCard.css';

export default function ProfileCard({ language, setLanguage }) {
  const borderRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const [displayedTitle, setDisplayedTitle] = useState('');

  const fullTitle = 'Desarrollador Front-End → Full-Stack';
  const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'GSAP', 'WordPress'];

  useEffect(() => {
    // Animación del borde con gradiente
    gsap.to(borderRef.current, {
      backgroundPosition: '200% center',
      duration: 4,
      repeat: -1,
      ease: 'linear'
    });
  }, []);

  useEffect(() => {
    // Slide-up + fade-in en nombre
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Slide-up + fade-in en título (con delay)
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
    );

    // Slide-up + fade-in en bio (con delay mayor)
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' }
    );
  }, []);

  // Typing effect en el título
  useEffect(() => {
    let index = 0;
    const typingInterval = setTimeout(() => {
      const typeTitle = () => {
        if (index < fullTitle.length) {
          setDisplayedTitle(fullTitle.substring(0, index + 1));
          index++;
          setTimeout(typeTitle, 120);
        }
      };
      typeTitle();
    }, 1300);

    return () => clearTimeout(typingInterval);
  }, [fullTitle]);

  const handleTitleHover = () => {
    gsap.to(titleRef.current, {
      color: '#80d4ff',
      boxShadow: '0 0 15px rgba(77, 184, 255, 0.8), 0 0 30px rgba(77, 184, 255, 0.5)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleTitleHoverOut = () => {
    gsap.to(titleRef.current, {
      color: '#4db8ff',
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div className="profile-card-wrapper">
      <div className="profile-card" ref={borderRef}>
        <div className="profile-card-content">
          <ProfilePhoto />
          
          <h1 className="profile-name" ref={nameRef}>Herasi Silva</h1>
          
          <h2 
            className="profile-title" 
            ref={titleRef}
            onMouseEnter={handleTitleHover}
            onMouseLeave={handleTitleHoverOut}
            title={fullTitle}
          >
            {displayedTitle}
            {displayedTitle.length < fullTitle.length && <span className="typing-cursor">|</span>}
          </h2>
          
          <p className="profile-bio" ref={bioRef}>
            Diseño tu sitio web con <span className="technologies">{technologies.join(' · ')}</span>
          </p>

          <SocialButtons />
        </div>
      </div>
    </div>
  );
}