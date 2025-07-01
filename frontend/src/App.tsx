import React from 'react';
import { FontProvider } from './contexts/FontContext';
import FontToolbar from './components/FontToolbar';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import './App.css';

function App() {
  return (
    <FontProvider>
      <div className="App">
        <FontToolbar />
        <AnalyticsDashboard />
      </div>
    </FontProvider>
  );
}

export default App;
