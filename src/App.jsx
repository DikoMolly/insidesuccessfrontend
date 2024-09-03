import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/registration';
import SuccessPage from './Pages/SuccessPage';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/success" element={<SuccessPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
