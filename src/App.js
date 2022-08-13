import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderRouter from './router';
import jQueryLib from 'jquery';

function App() {
  useEffect(() => {
    window.$ = window.jQuery = jQueryLib;
  }, []);

  return (
    <div className="App">
      <RenderRouter />
    </div>
  );
}

export default App;
