import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-300 bg-transparent hover:bg-[#0cd6ef] hover:bg-opacity-10"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-[#0cd6ef]" />
      ) : (
        <Moon className="h-5 w-5 text-[#0cd6ef]" />
      )}
    </button>
  );
};