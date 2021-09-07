import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : localStorage.theme
      : 'dark'
  );

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;