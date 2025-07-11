import { useLocation, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BookingConfirmation() {
  const { state } = useLocation();

  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const detailsRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

    tl.from(containerRef.current, { scale: 0.7, opacity: 0, duration: 1 })
      .from(headingRef.current, { y: -40, opacity: 0, duration: 1 }, "-=0.5")
      .from(detailsRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.7,
      }, "-=0.6")
      .from(linkRef.current, { opacity: 0, y: 30, duration: 0.7 }, "-=0.5");
  }, []);

  if (!state) {
    return <p className="p-4 text-center text-red-500">⚠️ No booking details found.</p>;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 px-4 overflow-hidden">

      {/* Background animated blobs */}
      <div className="absolute w-80 h-80 bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-pulse top-10 left-10 mix-blend-multiply"></div>
      <div className="absolute w-80 h-80 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-pulse bottom-10 right-10 mix-blend-multiply"></div>

      <div
        ref={containerRef}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl z-10"
      >
        <h1
          ref={headingRef}
          className="text-5xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        >
          🎉 Booking Confirmed!
        </h1>

        <div ref={detailsRef} className="text-gray-200 text-lg mb-6 space-y-3">
          <p>🎬 <strong>Movie:</strong> {state.movieTitle}</p>
          <p>💺 <strong>Seats:</strong> {state.seats.join(', ')}</p>
          <p className="text-green-400 font-semibold">✅ Enjoy your show!</p>
        </div>

        <Link
          ref={linkRef}
          to="/movies"
          className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
        >
          🎟️ Book Another Movie
        </Link>
      </div>
    </div>
  );
}
