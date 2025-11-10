'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProfilePhoto from './ProfilePhoto';
import './ProfileCard.css';

export default function ProfileCard({ language, setLanguage }) {
  const borderRef = useRef(null);

  useEffect(() => {
    // Animación del borde con gradiente más sutil y lenta
    gsap.to(borderRef.current, {
      backgroundPosition: '200% center',
      duration: 4,
      repeat: -1,
      ease: 'linear'
    });
  }, []);

  return (
    <div className="profile-card-wrapper">
      <div className="profile-card" ref={borderRef}>
        <div className="profile-card-content">
          <ProfilePhoto />
          
          <h1 className="profile-name">Herasi Silva</h1>
          <h2 className="profile-title">Desarrollador Front-End</h2>
          <p className="profile-subtitle">En formación Full Stack</p>
        </div>
      </div>
    </div>
  );
}