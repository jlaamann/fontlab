import React from 'react';
import { useFont } from '../contexts/FontContext';
import './FontToolbar.css';

const FontToolbar: React.FC = () => {
  const { currentFont, availableFonts, changeFont, isLoading } = useFont();

  return (
    <div className="font-toolbar">
      <div className="font-toolbar-content">
        <div className="toolbar-title">
          <span className="toolbar-icon">🔤</span>
          FontLab Pro - Font Tester
        </div>
        
        <div className="font-selector">
          <label htmlFor="font-select">Font Family:</label>
          <select 
            id="font-select"
            value={currentFont} 
            onChange={(e) => changeFont(e.target.value)}
            disabled={isLoading}
            className="font-dropdown"
          >
            {availableFonts.map((font) => (
              <option key={font.family} value={font.family}>
                {font.name}
              </option>
            ))}
          </select>
          {isLoading && <span className="loading-indicator">Loading...</span>}
        </div>

        <div className="current-font-display">
          Current: <span className="current-font-name">{currentFont}</span>
        </div>
      </div>
    </div>
  );
};

export default FontToolbar;