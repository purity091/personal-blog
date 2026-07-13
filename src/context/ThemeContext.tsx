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

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    try {
      localStorage.setItem('theme', 'light');
    } catch (e) {}
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
  }, []);

  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem('theme', 'light');
    } catch (e) {}
  };

  return (
    <ThemeContext.Provider value={{ theme: 'light', actualTheme: 'light', setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
