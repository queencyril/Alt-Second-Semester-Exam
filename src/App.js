import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter.js';
import ErrorBoundary from './components/Error.js';
import NotFound from './components/NotFound.js';
import './style.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/error" element={<ErrorBoundary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
    </Router>
  );
}

export default App;
