import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/link' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
