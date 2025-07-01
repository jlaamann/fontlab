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
  // Sans-serif fonts
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
  { name: 'Raleway', family: 'Raleway' },
  { name: 'Work Sans', family: 'Work Sans' },
  { name: 'Fira Sans', family: 'Fira Sans' },
  { name: 'IBM Plex Sans', family: 'IBM Plex Sans' },
  { name: 'Rubik', family: 'Rubik' },
  { name: 'DM Sans', family: 'DM Sans' },
  { name: 'Manrope', family: 'Manrope' },
  { name: 'Outfit', family: 'Outfit' },
  { name: 'Plus Jakarta Sans', family: 'Plus Jakarta Sans' },
  { name: 'Space Grotesk', family: 'Space Grotesk' },
  
  // Serif fonts
  { name: 'Playfair Display', family: 'Playfair Display' },
  { name: 'Merriweather', family: 'Merriweather' },
  { name: 'Source Serif Pro', family: 'Source Serif Pro' },
  { name: 'Crimson Text', family: 'Crimson Text' },
  { name: 'Libre Baskerville', family: 'Libre Baskerville' },
  { name: 'Lora', family: 'Lora' },
  { name: 'PT Serif', family: 'PT Serif' },
  { name: 'EB Garamond', family: 'EB Garamond' },
  { name: 'Cormorant Garamond', family: 'Cormorant Garamond' },
  { name: 'IBM Plex Serif', family: 'IBM Plex Serif' },
  
  // Display fonts
  { name: 'Oswald', family: 'Oswald' },
  { name: 'Anton', family: 'Anton' },
  { name: 'Bebas Neue', family: 'Bebas Neue' },
  { name: 'Righteous', family: 'Righteous' },
  { name: 'Fredoka One', family: 'Fredoka One' },
  { name: 'Archivo Black', family: 'Archivo Black' },
  { name: 'Titan One', family: 'Titan One' },
  { name: 'Bowlby One', family: 'Bowlby One' },
  { name: 'Bungee', family: 'Bungee' },
  { name: 'Comfortaa', family: 'Comfortaa' },
  
  // Monospace fonts
  { name: 'JetBrains Mono', family: 'JetBrains Mono' },
  { name: 'Fira Code', family: 'Fira Code' },
  { name: 'Source Code Pro', family: 'Source Code Pro' },
  { name: 'IBM Plex Mono', family: 'IBM Plex Mono' },
  { name: 'Roboto Mono', family: 'Roboto Mono' },
  { name: 'Space Mono', family: 'Space Mono' },
  { name: 'Inconsolata', family: 'Inconsolata' },
  { name: 'Ubuntu Mono', family: 'Ubuntu Mono' },
  { name: 'Courier Prime', family: 'Courier Prime' },
  { name: 'Overpass Mono', family: 'Overpass Mono' },
  
  // Handwriting/Script fonts
  { name: 'Dancing Script', family: 'Dancing Script' },
  { name: 'Pacifico', family: 'Pacifico' },
  { name: 'Kaushan Script', family: 'Kaushan Script' },
  { name: 'Satisfy', family: 'Satisfy' },
  { name: 'Caveat', family: 'Caveat' },
  { name: 'Great Vibes', family: 'Great Vibes' },
  { name: 'Allura', family: 'Allura' },
  { name: 'Sacramento', family: 'Sacramento' },
  { name: 'Amatic SC', family: 'Amatic SC' },
  { name: 'Patrick Hand', family: 'Patrick Hand' },
  
  // Additional popular fonts
  { name: 'Quicksand', family: 'Quicksand' },
  { name: 'Karla', family: 'Karla' },
  { name: 'Barlow', family: 'Barlow' },
  { name: 'Mukti', family: 'Mukti' },
  { name: 'Heebo', family: 'Heebo' },
  { name: 'Noto Sans', family: 'Noto Sans' },
  { name: 'Assistant', family: 'Assistant' },
  { name: 'Mulish', family: 'Mulish' },
  { name: 'Red Hat Display', family: 'Red Hat Display' },
  { name: 'Lexend', family: 'Lexend' },
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
      
      // Apply font to entire body (except toolbar which has explicit Helvetica)
      document.body.style.fontFamily = `"${fontFamily}", sans-serif`;
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