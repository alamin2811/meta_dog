import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
