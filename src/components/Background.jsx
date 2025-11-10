"use client";
import { useState } from 'react';
import Background from '../components/Background';

export default function Home() {
  const [language, setLanguage] = useState('es');

  return (
    <>
      <Background />
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center z-10 relative">
          <h1 className="text-white text-3xl font-bold mb-4">
            ✅ Background funcionando
          </h1>
          <p className="text-gray-400">
            ¿Ves las estrellas y partículas de colores flotando?
          </p>
        </div>
      </div>
    </>
  );
}