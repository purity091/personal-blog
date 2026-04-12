import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const getSystemTheme = (): 'light' | 'dark' => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Read the theme class that the inline script already set on <html>
// This ensures server and client hydration are in sync
const getInitialActualTheme = (): 'light' | 'dark' => {
  if (typeof document === 'undefined') return 'light';
  if (document.documentElement.classList.contains('dark')) return 'dark';
  return 'light';
};

const getInitialStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('theme') as Theme) || 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialStoredTheme);
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>(getInitialActualTheme);

  // Sync on mount: re-read from localStorage in case SSR had stale data
  useEffect(() => {
    const stored = (localStorage.getItem('theme') as Theme) || 'light';
    setThemeState(stored);
    setActualTheme(stored === 'system' ? getSystemTheme() : stored);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        setActualTheme(getSystemTheme());
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
    setActualTheme(newTheme === 'system' ? getSystemTheme() : newTheme);
  };

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(actualTheme);
  }, [actualTheme]);

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
