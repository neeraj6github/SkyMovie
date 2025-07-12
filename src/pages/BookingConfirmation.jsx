import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BookingConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
    );
  }, []);

  if (!state) {
    return <p className="p-4 text-center text-red-500">⚠️ No booking details found.</p>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div
        ref={modalRef}
        className="relative bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white p-10 rounded-3xl max-w-lg w-full text-center shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          🎉 Booking Confirmed!
        </h1>

        <div className="text-gray-200 text-lg mb-6 space-y-3">
          <p>🎬 <strong>Movie:</strong> {state.movieTitle}</p>
          <p>💺 <strong>Seats:</strong> {state.seats.join(', ')}</p>
          <p className="text-green-400 font-semibold">✅ Enjoy your show!</p>
        </div>

        <Link
          to="/movies"
          className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
        >
          🎟️ Book Another Movie
        </Link>

        <button
          onClick={() => navigate('/')}
          className="block mx-auto mt-4 text-sm text-gray-400 hover:text-white transition"
        >
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
}
