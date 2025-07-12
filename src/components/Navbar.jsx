import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        linksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-6 flex items-center justify-between shadow-lg fixed w-full top-0 z-50"
    >
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
        🎬 SkyMovie
      </h1>

      
      <button className="text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      
      <div
        ref={linksRef}
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-gray-900 z-40 md:bg-transparent md:static md:flex md:space-x-8 md:items-center md:justify-end text-center md:text-right`}
      >
        {['/', '/about', '/services', '/contact', '/movies'].map((path, i) => {
          const names = ['Home', 'About', 'Services', 'Contact', 'Movies'];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block md:inline pb-2 md:pb-0 px-4 py-2 border-b-2 ${
                  isActive
                    ? 'border-yellow-400 text-yellow-400'
                    : 'border-transparent hover:border-yellow-400 hover:text-yellow-400'
                } transition`
              }
              onClick={() => setIsOpen(false)}
            >
              {names[i]}
            </NavLink>
          );
        })}

        
        <div className="flex flex-col md:flex-row md:space-x-4 md:ml-4 mt-4 md:mt-0 items-center">
          <NavLink
            to="/login"
            className="w-full md:w-auto mb-2 md:mb-0 px-4 py-2 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="w-full md:w-auto px-4 py-2 rounded bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
