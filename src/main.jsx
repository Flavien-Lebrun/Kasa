import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import AppartmentCard from './pages/AppartmentCard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/Rental/:rentalId" element={<AppartmentCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)