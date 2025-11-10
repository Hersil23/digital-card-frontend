'use client';
import { useEffect, useState } from 'react';
import './Background.css';

export default function Background() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generar estrellas aleatorias con diferentes velocidades
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        floatDuration: Math.random() * 15 + 10, // Movimiento más lento (10-25s)
        twinkleDuration: Math.random() * 3 + 2, // Parpadeo (2-5s)
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="background-container">
      {/* Fondo negro base */}
      <div className="bg-black absolute inset-0" />

      {/* Aurora Boreal - 5 capas animadas */}
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="aurora aurora-4" />
      <div className="aurora aurora-5" />

      {/* Gradiente de profundidad */}
      <div className="depth-gradient" />

      {/* Estrellas */}
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.floatDuration}s, ${star.twinkleDuration}s`,
              animationDelay: `${star.delay}s, ${star.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}