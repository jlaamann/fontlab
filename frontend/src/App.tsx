import { useState } from 'react';
import { FontProvider } from './contexts/FontContext';
import FontToolbar from './components/FontToolbar';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import NewsSite from './components/NewsSite';
import ProductLanding from './components/ProductLanding';
import './firebase';
import './App.css';

function App() {
  const [currentMockup, setCurrentMockup] = useState<'analytics' | 'news' | 'landing'>('analytics');

  const handleMockupChange = (mockupType: 'analytics' | 'news' | 'landing') => {
    setCurrentMockup(mockupType);
  };

  return (
    <FontProvider>
      <div className="App">
        <FontToolbar />
        <div className="mockup-switcher">
          <button
            className={`mockup-btn ${currentMockup === 'analytics' ? 'active' : ''}`}
            onClick={() => handleMockupChange('analytics')}
          >
            Analytics Dashboard
          </button>
          <button
            className={`mockup-btn ${currentMockup === 'news' ? 'active' : ''}`}
            onClick={() => handleMockupChange('news')}
          >
            News Site CMS
          </button>
          <button
            className={`mockup-btn ${currentMockup === 'landing' ? 'active' : ''}`}
            onClick={() => handleMockupChange('landing')}
          >
            Product Landing
          </button>
        </div>
        {currentMockup === 'analytics' && <AnalyticsDashboard />}
        {currentMockup === 'news' && <NewsSite />}
        {currentMockup === 'landing' && <ProductLanding />}
      </div>
    </FontProvider>
  );
}

export default App;
