import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = {
  light: '/themes/light.css',
  dark: '/themes/dark.css',
  blue: '/themes/blue.css',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let link = document.getElementById('theme-css');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = 'theme-css';
      document.head.appendChild(link);
    }
    link.href = themes[theme];
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
  