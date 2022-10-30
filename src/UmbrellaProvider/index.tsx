import React from 'react';
import { Theme } from '../types';

export interface UmbrellaContextProps {
  currentTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface UmbrellaProviderProps {
    theme: Theme,
    children: React.ReactNode | React.ReactNode[];
}

export const UmbrellaContext = React.createContext<UmbrellaContextProps>({
    currentTheme: () => {} ,
    setTheme: () => {}
});

export const UmbrellaProvider: React.FC<UmbrellaProviderProps> = ({ theme, children }) => {
  const [activeTheme, setActiveTheme] = React.useState<Theme>(theme);

  const currentTheme = (): Theme => {
    return activeTheme;
  }
  const setTheme = (theme: Theme) => {
    setActiveTheme(theme);
  }
  return (
    <UmbrellaContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </UmbrellaContext.Provider>
  )
}

export const useTheme = () => React.useContext(UmbrellaContext).currentTheme();
export const setTheme = (theme: Theme) => React.useContext(UmbrellaContext).setTheme(theme);