import  { useState } from 'react';
import logo from '../assets/logo2.png';

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    
  return (
    <nav className="w-full absolute top-0 left-0 z-10 mb-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-50 md:pl-12 mt-2" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-pink-300">Home</a>
          <a href="#services" className=" hover:text-pink-300">Services</a>
          <a href="/about" className=" hover:text-pink-300">About</a>
          <a href="#portfolio" className=" hover:text-pink-300">Portfolio</a>
          <a href="#contact" className=" hover:text-pink-300">Contact</a>
          <div>
            <a href="#BookNow" className="px-4 py-1 rounded-full border border-gray-400">Book Now</a>
          </div>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-2 py-2">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
