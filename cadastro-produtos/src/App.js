import React from 'react';

import Navbar from './components/navbar'
import Home from './views/home'

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
