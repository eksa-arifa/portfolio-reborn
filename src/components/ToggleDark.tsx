// components/DarkModeToggle.jsx
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    document.documentElement.classList.toggle('dark', storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', `${newMode}`);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className=""
    >
      {darkMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}
    </button>
  );
};

export default DarkModeToggle;
