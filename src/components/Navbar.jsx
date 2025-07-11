import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-6 flex justify-between items-center shadow-lg"
    >
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
        🎬 SkyMovie
      </h1>

      <div className="space-x-8 block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `pb-1 border-b-2 ${
              isActive
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent hover:border-yellow-400 hover:text-yellow-400'
            } transition`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `pb-1 border-b-2 ${
              isActive
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent hover:border-yellow-400 hover:text-yellow-400'
            } transition`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `pb-1 border-b-2 ${
              isActive
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent hover:border-yellow-400 hover:text-yellow-400'
            } transition`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `pb-1 border-b-2 ${
              isActive
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent hover:border-yellow-400 hover:text-yellow-400'
            } transition`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `pb-1 border-b-2 ${
              isActive
                ? 'border-yellow-400 text-yellow-400'
                : 'border-transparent hover:border-yellow-400 hover:text-yellow-400'
            } transition`
          }
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
