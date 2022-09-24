import React from 'react';
import { Theme } from '../types';

interface ThemeContextProps {
  currentTheme: () => void;
  setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
    theme: Theme,
    children: React.ReactNode | React.ReactNode[];
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    currentTheme: () => {} ,
    setTheme: () => {}
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const [activeTheme, setActiveTheme] = React.useState<Theme>(theme);

  const currentTheme = (): Theme => {
    return activeTheme
  }
  const setTheme = (theme: Theme) => {
    setActiveTheme(theme);
  }
  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext).currentTheme();
export const setTheme = (theme: Theme) => React.useContext(ThemeContext).setTheme(theme);