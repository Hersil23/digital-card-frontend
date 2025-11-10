'use client';
import './ProfileCard.css';

export default function ProfileCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="profile-card">
        <div className="relative z-10">
          {/* Aquí irán todos los componentes internos */}
          <h1 className="text-white text-3xl font-bold text-center mb-2">
            Herasi Silva
          </h1>
          <p className="text-gray-300 text-center text-lg">
            Desarrollador Front-End
          </p>
          <p className="text-gray-400 text-center text-sm mt-2">
            En formación Full Stack
          </p>
        </div>
      </div>
    </div>
  );
}