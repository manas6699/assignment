// Navbar.js
import { useState } from 'react';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/bg.png'; 
import { faTwitter, faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './About';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Touch from './Touch';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <div
      className="bg-cover bg-center w-full h-screen relative flex items-center justify-center bg-blend-darken"
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      <nav className="w-full absolute top-0 left-0 z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-50 md:pl-12 mt-2" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="/services" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#portfolio" className="text-white hover:text-gray-300">
              Portfolio
            </a>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact
            </a>
            <div>
              <a href="#BookNow" className="text-white hover:text-gray-300 px-4 py-1 rounded-full border">
              Book Now
            </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-white flex flex-col items-center space-y-2 py-2">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        )}
      </nav>
      <div className="flex flex-col items-center justify-center absolute right-4 top-0 bottom-0 text-white">
        <div className="flex flex-col items-center">
          <div className="bg-white h-10 w-px mb-2"></div> 
          <div className="flex flex-col">
            <a href="https://twitter.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://facebook.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            </div>
          <div className="bg-white h-10 w-px mt-2"></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-white text-4xl w-1/2 p-2 md:text-8xl md:w-2/3 text-center z-50" style={{ fontFamily: 'Lateef' }}>
          Your Dream Wedding Made Perfect
        </h1>
      </div>

    </div>
      <About/>
     <Gallery/>
     <Testimonials/>
     <Touch/>
     
    </>
  );
};

export default Home;
