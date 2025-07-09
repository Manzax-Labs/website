import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface Theme {
  name: string;
  colors: {
    '--primary-50': string;
    '--primary-100': string;
    '--primary-200': string;
    '--primary-300': string;
    '--primary-400': string;
    '--primary-500': string;
    '--primary-600': string;
    '--primary-700': string;
    '--primary-800': string;
    '--primary-900': string;
    '--accent-blue': string;
    '--accent-coral': string;
    '--accent-mustard': string;
    '--text-primary': string;
    '--text-secondary': string;
    '--text-muted': string;
    '--bg-primary': string;
    '--bg-secondary': string;
    '--logo-filter': string;
  };
}

export const themes: Theme[] = [
  {
    name: 'Forest',
    colors: {
      '--primary-50': '#E5EBEA',
      '--primary-100': '#D1D9D8',
      '--primary-200': '#A3B3B1',
      '--primary-300': '#758D8A',
      '--primary-400': '#476763',
      '--primary-500': '#3A4F41',
      '--primary-600': '#2E3F34',
      '--primary-700': '#222F27',
      '--primary-800': '#161F1A',
      '--primary-900': '#0B0F0D',
      '--accent-blue': '#7DD3FC',
      '--accent-coral': '#FB7185',
      '--accent-mustard': '#F59E0B',
      '--text-primary': '#222F27',
      '--text-secondary': '#2E3F34',
      '--text-muted': '#3A4F41',
      '--bg-primary': '#E5EBEA',
      '--bg-secondary': '#ffffff',
      '--logo-filter': 'brightness(0)',
    }
  },
  {
    name: 'Ocean',
    colors: {
      '--primary-50': '#E0F2FE',
      '--primary-100': '#BAE6FD',
      '--primary-200': '#7DD3FC',
      '--primary-300': '#38BDF8',
      '--primary-400': '#0EA5E9',
      '--primary-500': '#0284C7',
      '--primary-600': '#0369A1',
      '--primary-700': '#075985',
      '--primary-800': '#0C4A6E',
      '--primary-900': '#082F49',
      '--accent-blue': '#F59E0B',
      '--accent-coral': '#FB7185',
      '--accent-mustard': '#10B981',
      '--text-primary': '#075985',
      '--text-secondary': '#0369A1',
      '--text-muted': '#0284C7',
      '--bg-primary': '#E0F2FE',
      '--bg-secondary': '#ffffff',
      '--logo-filter': 'brightness(0)',
    }
  },
  {
    name: 'Sunset',
    colors: {
      '--primary-50': '#FEF2F2',
      '--primary-100': '#FEE2E2',
      '--primary-200': '#FECACA',
      '--primary-300': '#FCA5A5',
      '--primary-400': '#F87171',
      '--primary-500': '#EF4444',
      '--primary-600': '#DC2626',
      '--primary-700': '#B91C1C',
      '--primary-800': '#991B1B',
      '--primary-900': '#7F1D1D',
      '--accent-blue': '#F59E0B',
      '--accent-coral': '#8B5CF6',
      '--accent-mustard': '#10B981',
      '--text-primary': '#B91C1C',
      '--text-secondary': '#DC2626',
      '--text-muted': '#EF4444',
      '--bg-primary': '#FEF2F2',
      '--bg-secondary': '#ffffff',
      '--logo-filter': 'brightness(0)',
    }
  },
  {
    name: 'Purple',
    colors: {
      '--primary-50': '#FAF5FF',
      '--primary-100': '#F3E8FF',
      '--primary-200': '#E9D5FF',
      '--primary-300': '#D8B4FE',
      '--primary-400': '#C084FC',
      '--primary-500': '#A855F7',
      '--primary-600': '#9333EA',
      '--primary-700': '#7C3AED',
      '--primary-800': '#6B21A8',
      '--primary-900': '#581C87',
      '--accent-blue': '#F59E0B',
      '--accent-coral': '#EF4444',
      '--accent-mustard': '#10B981',
      '--text-primary': '#7C3AED',
      '--text-secondary': '#9333EA',
      '--text-muted': '#A855F7',
      '--bg-primary': '#FAF5FF',
      '--bg-secondary': '#ffffff',
      '--logo-filter': 'brightness(0)',
    }
  },
  {
    name: 'Dark',
    colors: {
      '--primary-50': '#1A1A1A',
      '--primary-100': '#2D2D2D',
      '--primary-200': '#404040',
      '--primary-300': '#525252',
      '--primary-400': '#666666',
      '--primary-500': '#0075F9',     // Main blue (CTA)
      '--primary-600': '#0056B8',
      '--primary-700': '#003D82',
      '--primary-800': '#002A5C',
      '--primary-900': '#001A36',
      '--accent-blue': '#00B4FF',     // Bright blue accent
      '--accent-coral': '#FF6B6B',    // Alert, badges
      '--accent-mustard': '#FFD93D',  // Highlights, info
      '--text-primary': '#FFFFFF',    // White text for dark background
      '--text-secondary': '#E0E0E0',  // Light gray for secondary text
      '--text-muted': '#B0B0B0',      // Muted gray for less important text
      '--bg-primary': '#1A1A1A',      // Dark background
      '--bg-secondary': '#2D2D2D',    // Slightly lighter dark background
      '--logo-filter': 'brightness(0) invert(1)',
    }
  },
  {
    name: 'Elegant Light',
    colors: {
      '--primary-50': '#F8FAFC',       // Near-white background
      '--primary-100': '#EEF2F6',
      '--primary-200': '#DCE3EA',
      '--primary-300': '#C9D4DE',
      '--primary-400': '#AEBECF',
      '--primary-500': '#6B7FAF',      // Soft desaturated blue
      '--primary-600': '#5C6E9C',
      '--primary-700': '#4B5C82',
      '--primary-800': '#3A4A69',
      '--primary-900': '#2C3952',
      '--accent-blue': '#D9A5B3',     // Soft blush pink
      '--accent-coral': '#B4E3C5',      // Elegant mint green
      '--accent-mustard': '#E2C275',      // Classy muted gold
      '--text-primary': '#1C1C1E',     // Almost black
      '--text-secondary': '#3C3C43',   // Soft dark gray
      '--text-muted': '#6C6C75',
      '--bg-primary': '#FFFFFF',
      '--bg-secondary': '#F6F6F7',
      '--logo-filter': 'none'
    }
  }
  
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('selectedTheme', theme.name);
    
    // Apply theme colors to CSS custom properties
    Object.entries(theme.colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    const themeToApply = savedTheme 
      ? themes.find(theme => theme.name === savedTheme) || themes[0]
      : themes[0];
    
    setTheme(themeToApply);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}; 