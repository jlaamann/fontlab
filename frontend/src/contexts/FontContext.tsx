import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import WebFont from 'webfontloader';

interface FontContextType {
  currentFont: string;
  availableFonts: Font[];
  changeFont: (fontFamily: string) => void;
  isLoading: boolean;
}

interface Font {
  name: string;
  family: string;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

const GOOGLE_FONTS: Font[] = [
  { name: 'Inter', family: 'Inter' },
  { name: 'Roboto', family: 'Roboto' },
  { name: 'Open Sans', family: 'Open Sans' },
  { name: 'Poppins', family: 'Poppins' },
  { name: 'Lato', family: 'Lato' },
  { name: 'Montserrat', family: 'Montserrat' },
  { name: 'Source Sans Pro', family: 'Source Sans Pro' },
  { name: 'Nunito', family: 'Nunito' },
  { name: 'PT Sans', family: 'PT Sans' },
  { name: 'Ubuntu', family: 'Ubuntu' },
];

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [currentFont, setCurrentFont] = useState<string>('Inter');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedFonts, setLoadedFonts] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load initial font
    loadFont('Inter');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadFont = (fontFamily: string) => {
    if (loadedFonts.has(fontFamily)) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      WebFont.load({
        google: {
          families: [fontFamily]
        },
        active: () => {
          setLoadedFonts(prev => new Set(prev).add(fontFamily));
          resolve();
        },
        inactive: () => {
          reject(new Error(`Failed to load font: ${fontFamily}`));
        }
      });
    });
  };

  const changeFont = async (fontFamily: string) => {
    setIsLoading(true);
    try {
      await loadFont(fontFamily);
      setCurrentFont(fontFamily);
      
      // Apply font to dashboard content only
      const dashboardElement = document.querySelector('.analytics-dashboard');
      if (dashboardElement) {
        (dashboardElement as HTMLElement).style.fontFamily = `"${fontFamily}", sans-serif`;
      }
    } catch (error) {
      console.error('Failed to load font:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value: FontContextType = {
    currentFont,
    availableFonts: GOOGLE_FONTS,
    changeFont,
    isLoading,
  };

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export const useFont = (): FontContextType => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};