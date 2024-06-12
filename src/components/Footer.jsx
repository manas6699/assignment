
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="p-8 items-center mt-10">
      <div className="container mx-auto px-4 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mx-auto">
          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-gray-400">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul>
              <li className="mb-2 hover:text-gray-400"><a href="/services/service1">Service 1</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="/services/service2">Service 2</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="/services/service3">Service 3</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="/services/service4">Service 4</a></li>
            </ul>
          </div>
          
          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul>
              <li className="mb-2 hover:text-gray-400"><a href="/about">About Us</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="/contact">Contact</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="/privacy">Privacy Policy</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul>
              <li className="mb-2">123 Main Street</li>
              <li className="mb-2">City, State 12345</li>
              <li className="mb-2">Email: info@example.com</li>
              <li className="mb-2">Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8">
          <p>Copyright by KISMETEVENTS @ 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
