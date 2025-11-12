'use client';
import { useState } from 'react';
import Background from '../components/Background';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  const [language, setLanguage] = useState('es');

  return (
    <>
      <Background />
      <ProfileCard language={language} setLanguage={setLanguage} />
    </>
  );
}