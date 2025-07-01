import React, { useState, useRef, useEffect } from 'react';
import { useFont } from '../contexts/FontContext';
import './FontToolbar.css';

const FontToolbar: React.FC = () => {
  const { currentFont, availableFonts, changeFont, isLoading } = useFont();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleFontSelect = (fontFamily: string) => {
    changeFont(fontFamily);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    if (!isLoading) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const currentFontName = availableFonts.find(font => font.family === currentFont)?.name || currentFont;

  return (
    <div className="font-toolbar">
      <div className="font-toolbar-content">
        <div className="toolbar-title">
          <span className="toolbar-icon">🔤</span>
          FontLab Pro - Font Tester
        </div>

        <div className="font-selector">
          <label>Font Family:</label>
          <div className="custom-dropdown" ref={dropdownRef}>
            <div
              className={`dropdown-trigger ${isLoading ? 'disabled' : ''}`}
              onClick={toggleDropdown}
            >
              <span className="selected-font">{currentFontName}</span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </div>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {availableFonts.map((font) => (
                  <div
                    key={font.family}
                    className={`dropdown-item ${font.family === currentFont ? 'selected' : ''}`}
                    onClick={() => handleFontSelect(font.family)}
                  >
                    {font.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          {isLoading && <span className="loading-indicator">Loading...</span>}
        </div>
      </div>
    </div>
  );
};

export default FontToolbar;