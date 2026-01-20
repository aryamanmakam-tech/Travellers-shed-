
import React from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'Trips', id: 'trips' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm px-6 py-4 flex justify-between items-center">
      <div 
        className="text-2xl font-serif font-bold tracking-tight cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        THE TRAVELLER’S <span className="text-stone-500">SHED</span>
      </div>
      
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-sm uppercase tracking-widest transition-colors ${
              currentPage === item.id ? 'text-stone-900 font-semibold' : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button 
        onClick={() => onNavigate('dashboard')}
        className="bg-stone-900 text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-stone-800 transition-colors"
      >
        My Account
      </button>
    </nav>
  );
};

export default Navbar;
