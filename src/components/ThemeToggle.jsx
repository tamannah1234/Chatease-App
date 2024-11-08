import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react'; 

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none text-gray-500 dark:text-gray-300"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon size={32} /> : <Sun size={32} />}
    </button>
  );
};

export default ThemeToggle;
