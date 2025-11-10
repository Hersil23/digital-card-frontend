'use client';
import './ProfileCard.css';

export default function ProfileCard() {
  return (
    <div className="profile-card-container">
      <div className="profile-card-wrapper">
        {/* Borde animado */}
        <div className="profile-card-border"></div>
        
        {/* Tarjeta principal */}
        <div className="profile-card">
          <div className="profile-content">
            {/* Texto de prueba con los colores correctos */}
            <h1 className="profile-name">Herasi Silva</h1>
            <p className="profile-title">Desarrollador Front-End</p>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              En formación Full Stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}