import { useState } from 'react';
import { FontProvider } from './contexts/FontContext';
import FontToolbar from './components/FontToolbar';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import NewsSite from './components/NewsSite';
import './App.css';

function App() {
  const [currentMockup, setCurrentMockup] = useState<'analytics' | 'news'>('analytics');

  return (
    <FontProvider>
      <div className="App">
        <FontToolbar />
        <div className="mockup-switcher">
          <button 
            className={`mockup-btn ${currentMockup === 'analytics' ? 'active' : ''}`}
            onClick={() => setCurrentMockup('analytics')}
          >
            Analytics Dashboard
          </button>
          <button 
            className={`mockup-btn ${currentMockup === 'news' ? 'active' : ''}`}
            onClick={() => setCurrentMockup('news')}
          >
            News Site CMS
          </button>
        </div>
        {currentMockup === 'analytics' ? <AnalyticsDashboard /> : <NewsSite />}
      </div>
    </FontProvider>
  );
}

export default App;
