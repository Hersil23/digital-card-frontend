"use client";

export default function ProfileCard({ language }) {
  const content = {
    es: {
      title: "Desarrollador Front-End",
      description: "Especializado en crear experiencias web modernas con React, Next.js y animaciones interactivas."
    },
    en: {
      title: "Front-End Developer",
      description: "Specialized in creating modern web experiences with React, Next.js and interactive animations."
    }
  };

  return (
    <div className="flex flex-col items-center pt-24 pb-8 px-6">
      {/* Foto de perfil */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mb-6">
        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-5xl">
          👤
        </div>
      </div>

      {/* Nombre */}
      <h1 className="text-4xl font-bold text-white mb-2">
        Herasi Silva
      </h1>

      {/* Título */}
      <h2 className="text-xl text-blue-400 mb-4">
        {content[language].title}
      </h2>

      {/* Descripción */}
      <p className="text-gray-400 text-center max-w-md">
        {content[language].description}
      </p>
    </div>
  );
}