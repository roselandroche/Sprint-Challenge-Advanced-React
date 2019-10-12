import React from 'react';
import './App.css';
import Display from './Display';
import { useDarkMode } from './hooks.js/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App ">
      <div className='dark-mode-toggle'>
        <label>Dark Mode:
          <input 
            type='checkbox' 
            checked={darkMode} 
            value={darkMode}
            onChange={toggleMode}
            onClick={toggleMode} 
            className={darkMode ? 'toggle toggled': 'toggle'}
          />
        </label>
      </div>
      <h1>Women's World Cup Players</h1>
      <Display />
    </div>
  );
}

export default App;
