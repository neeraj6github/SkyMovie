import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 px-4 border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4 text-center">
        {/* Brand */}
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-bold text-white">SkyMovie</span>. All rights reserved.
        </p>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm">
          <NavLink
            to="/about"
            className="hover:text-yellow-400 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-yellow-400 transition"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </NavLink>
        </div>

        {/* Small Note */}
        <p className="text-xs text-gray-400 tracking-wide">
          Crafted with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
