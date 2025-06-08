import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themes = ['light', 'dark', 'blue'];

  return (
    <div className={styles.container}>
      {themes.map((th) => (
        <button
          key={th}
          onClick={() => toggleTheme(th)}
          disabled={theme === th}
          className={`${styles.button} ${styles[th]}`}  // add theme class
        >
          {th.charAt(0).toUpperCase() + th.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
