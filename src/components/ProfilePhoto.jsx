'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ProfilePhoto.css';

export default function ProfilePhoto() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Animación del glow azul neón que pulsa de forma más sutil
    gsap.to(glowRef.current, {
      boxShadow: '0 0 25px 10px rgba(0, 217, 255, 0.5), 0 0 50px 20px rgba(0, 217, 255, 0.2)',
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <div className="profile-photo-container">
      <div className="profile-photo-wrapper" ref={glowRef}>
        <img 
          src="/herasi.jpg" 
          alt="Herasi Silva - Desarrollador Front-End"
          className="profile-photo"
        />
      </div>
    </div>
  );
}