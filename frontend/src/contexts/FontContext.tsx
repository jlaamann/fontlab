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
  { name: 'Allura', family: 'Allura' },
  { name: 'Amatic SC', family: 'Amatic SC' },
  { name: 'Anton', family: 'Anton' },
  { name: 'Archivo Black', family: 'Archivo Black' },
  { name: 'Assistant', family: 'Assistant' },
  { name: 'Barlow', family: 'Barlow' },
  { name: 'Bebas Neue', family: 'Bebas Neue' },
  { name: 'Bowlby One', family: 'Bowlby One' },
  { name: 'Bungee', family: 'Bungee' },
  { name: 'Caveat', family: 'Caveat' },
  { name: 'Comfortaa', family: 'Comfortaa' },
  { name: 'Cormorant Garamond', family: 'Cormorant Garamond' },
  { name: 'Courier Prime', family: 'Courier Prime' },
  { name: 'Crimson Text', family: 'Crimson Text' },
  { name: 'Dancing Script', family: 'Dancing Script' },
  { name: 'DM Sans', family: 'DM Sans' },
  { name: 'EB Garamond', family: 'EB Garamond' },
  { name: 'Fira Code', family: 'Fira Code' },
  { name: 'Fira Sans', family: 'Fira Sans' },
  { name: 'Fredoka One', family: 'Fredoka One' },
  { name: 'Great Vibes', family: 'Great Vibes' },
  { name: 'Heebo', family: 'Heebo' },
  { name: 'IBM Plex Mono', family: 'IBM Plex Mono' },
  { name: 'IBM Plex Sans', family: 'IBM Plex Sans' },
  { name: 'IBM Plex Serif', family: 'IBM Plex Serif' },
  { name: 'Inconsolata', family: 'Inconsolata' },
  { name: 'Inter', family: 'Inter' },
  { name: 'JetBrains Mono', family: 'JetBrains Mono' },
  { name: 'Karla', family: 'Karla' },
  { name: 'Kaushan Script', family: 'Kaushan Script' },
  { name: 'Lato', family: 'Lato' },
  { name: 'Lexend', family: 'Lexend' },
  { name: 'Libre Baskerville', family: 'Libre Baskerville' },
  { name: 'Lora', family: 'Lora' },
  { name: 'Manrope', family: 'Manrope' },
  { name: 'Merriweather', family: 'Merriweather' },
  { name: 'Montserrat', family: 'Montserrat' },
  { name: 'Mukti', family: 'Mukti' },
  { name: 'Mulish', family: 'Mulish' },
  { name: 'Noto Sans', family: 'Noto Sans' },
  { name: 'Nunito', family: 'Nunito' },
  { name: 'Open Sans', family: 'Open Sans' },
  { name: 'Oswald', family: 'Oswald' },
  { name: 'Outfit', family: 'Outfit' },
  { name: 'Overpass Mono', family: 'Overpass Mono' },
  { name: 'Pacifico', family: 'Pacifico' },
  { name: 'Patrick Hand', family: 'Patrick Hand' },
  { name: 'Playfair Display', family: 'Playfair Display' },
  { name: 'Plus Jakarta Sans', family: 'Plus Jakarta Sans' },
  { name: 'Poppins', family: 'Poppins' },
  { name: 'PT Sans', family: 'PT Sans' },
  { name: 'PT Serif', family: 'PT Serif' },
  { name: 'Quicksand', family: 'Quicksand' },
  { name: 'Raleway', family: 'Raleway' },
  { name: 'Red Hat Display', family: 'Red Hat Display' },
  { name: 'Righteous', family: 'Righteous' },
  { name: 'Roboto', family: 'Roboto' },
  { name: 'Roboto Mono', family: 'Roboto Mono' },
  { name: 'Rubik', family: 'Rubik' },
  { name: 'Sacramento', family: 'Sacramento' },
  { name: 'Satisfy', family: 'Satisfy' },
  { name: 'Source Code Pro', family: 'Source Code Pro' },
  { name: 'Source Sans Pro', family: 'Source Sans Pro' },
  { name: 'Source Serif Pro', family: 'Source Serif Pro' },
  { name: 'Space Grotesk', family: 'Space Grotesk' },
  { name: 'Space Mono', family: 'Space Mono' },
  { name: 'Titan One', family: 'Titan One' },
  { name: 'Ubuntu', family: 'Ubuntu' },
  { name: 'Ubuntu Mono', family: 'Ubuntu Mono' },
  { name: 'Work Sans', family: 'Work Sans' },
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