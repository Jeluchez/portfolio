import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';



export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="transition-all duration-300 cursor-pointer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Theme"
    >
      {
        theme === 'light'
          ? (
            <SunIcon className="w-6 h-6 text-black transition-all hover:text-surface-3" />
          )
          :
          (
            <MoonIcon className="w-5 h-5 text-white transition-all  hover:text-purple " />
          )
      }
    </button>
  );
};
