"use client";

export default function Header({ language, setLanguage }) {
  return (
    <header className="fixed top-0 right-0 p-6 z-50">
      <button
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        className="px-6 py-2 bg-gray-800 text-white rounded-full border border-gray-700 hover:bg-gray-700 transition-all duration-300 font-medium"
      >
        {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
      </button>
    </header>
  );
}