'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './SocialButtons.css';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaTiktok, 
  FaEnvelope, 
  FaGlobe
} from 'react-icons/fa';

export default function SocialButtons() {
  const buttonsRef = useRef([]);

  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/584145116337',
      color: '#25D366'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/herasi.dev',
      color: '#E4405F'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://tiktok.com/@herasi.dev',
      color: '#000000'
    },
    {
      id: 'email',
      name: 'Correo',
      icon: FaEnvelope,
      url: 'mailto:herasidesweb@gmail.com',
      color: '#EA4335'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      icon: FaGlobe,
      url: 'https://herasi.dev',
      color: '#00D9FF'
    }
  ];

  useEffect(() => {
    buttonsRef.current.forEach((button, index) => {
      gsap.fromTo(
        button,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: 0.6 + (index * 0.1), 
          ease: 'power2.out' 
        }
      );
    });
  }, []);

  const handleButtonHover = (index, color) => {
    const button = buttonsRef.current[index];
    gsap.to(button, {
      scale: 1.05,
      boxShadow: `0 0 20px ${color}80, inset 0 0 20px ${color}40`,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleButtonHoverOut = (index) => {
    const button = buttonsRef.current[index];
    gsap.to(button, {
      scale: 1,
      boxShadow: 'none',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div className="social-buttons-container">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            ref={(el) => (buttonsRef.current[index] = el)}
            style={{ '--border-color': social.color }}
            onMouseEnter={() => handleButtonHover(index, social.color)}
            onMouseLeave={() => handleButtonHoverOut(index)}
          >
            <IconComponent className="social-icon" />
            <span className="social-name">{social.name}</span>
          </a>
        );
      })}
    </div>
  );
}