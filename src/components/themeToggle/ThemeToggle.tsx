import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';



export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') || 'light'
      : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="h-6 w-12 bg-gold dark:bg-purple rounded-full flex items-center px-1 transition-all duration-300"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Theme"
    >
      <span className={`flex items-center justify-center w-6 h-6 bg-white dark:bg-orange rounded-full shadow-md transform transition-transform duration-300 ${
        theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
      }`}>
        {
          theme === 'light'
            ? (
              <SunIcon className="w-4 h-4 text-purple dark:text-orange transition-all" />
            )
            :
            (
              <MoonIcon className="w-4 h-4 text-purple dark:text-orange transition-all" />
            )
        }
      </span>
    </button>
  );
};
