import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the type for the context value
type ThemeOptions = 'light' | 'dark'
interface ThemeContextType {
  theme: string;
  setTheme: (theme: ThemeOptions) => void;
}

// Create the context with an initial undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setValue] = useState<ThemeOptions>('light');

  const setTheme = (value:ThemeOptions) => {
    setValue(value);
  };
  // Synchronize theme state with HTML data attribute
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for accessing theme context
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
