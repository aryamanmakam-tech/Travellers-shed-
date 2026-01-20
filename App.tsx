
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Trips from './pages/Trips';
import TripDetail from './pages/TripDetail';
import Customize from './pages/Customize';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import { Trip } from './types';
import { TRIPS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [cart, setCart] = useState<Trip | null>(null);

  // Simple Router
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home 
          onNavigate={handleNavigation} 
          onSelectTrip={(trip) => { setSelectedTrip(trip); setCurrentPage('trip-detail'); }} 
        />;
      case 'destinations':
        return <Destinations onNavigate={handleNavigation} />;
      case 'trips':
        return <Trips 
          onNavigate={handleNavigation} 
          onSelectTrip={(trip) => { setSelectedTrip(trip); setCurrentPage('trip-detail'); }} 
        />;
      case 'trip-detail':
        return selectedTrip ? (
          <TripDetail 
            trip={selectedTrip} 
            onBook={() => { setCart(selectedTrip); setCurrentPage('customize'); }} 
          />
        ) : <Home onNavigate={handleNavigation} onSelectTrip={() => {}} />;
      case 'customize':
        return cart ? (
          <Customize 
            trip={cart} 
            onNext={() => setCurrentPage('booking')} 
          />
        ) : <Trips onNavigate={handleNavigation} onSelectTrip={() => {}} />;
      case 'booking':
        return cart ? <Booking trip={cart} onComplete={() => setCurrentPage('dashboard')} /> : null;
      case 'dashboard':
        return <Dashboard />;
      case 'about':
        return <About />;
      case 'reviews':
        return <Reviews />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigation} onSelectTrip={() => {}} />;
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
};

export default App;
