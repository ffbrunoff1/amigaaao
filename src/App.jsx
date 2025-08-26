import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/reservas" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
}
