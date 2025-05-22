import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Book Your Bouncer</h3>
          <p className="text-sm">
            Trusted security services for events, venues, and VIPs across India. Your safety is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/book-bouncer" className="hover:underline">Book</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:support@bookyourbouncer.com" className="hover:underline">support@bookyourbouncer.com</a></li>
            <li>Phone: <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a></li>
            <li>Location: New Delhi, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/bookyourbouncer" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5 hover:text-gray-300" />
            </a>
            <a href="https://twitter.com/bookyourbouncer" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="w-5 h-5 hover:text-gray-300" />
            </a>
            <a href="https://instagram.com/bookyourbouncer" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com/company/bookyourbouncer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Book Your Bouncer. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
