import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { movies } from '../data/movies';
import gsap from 'gsap';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  const [selectedSeats, setSelectedSeats] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    navigate('/confirmation', {
      state: {
        movieTitle: movie.title,
        seats: selectedSeats,
      },
    });
  };

  if (!movie) {
    return (
      <p className="p-4 text-center text-red-500 font-bold">
        ❌ Movie not found!
      </p>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-yellow-400 drop-shadow">
        🎬 {movie.title}
      </h1>
      <p className="mb-4 text-gray-300">{movie.genre}</p>
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-64 rounded-lg shadow-2xl mb-6"
      />

      <h2 className="text-2xl font-bold mb-4">🎟️ Select Your Seats</h2>
      <div className="grid grid-cols-5 gap-3 mb-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <button
            key={i}
            onClick={() => toggleSeat(i + 1)}
            className={`border border-gray-600 rounded-md px-3 py-2 font-semibold hover:scale-105 transition transform duration-200 ${
              selectedSeats.includes(i + 1)
                ? 'bg-green-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Seat {i + 1}
          </button>
        ))}
      </div>

      <button
        disabled={selectedSeats.length === 0}
        onClick={handleBooking}
        className={`${
          selectedSeats.length === 0
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-yellow-400 hover:bg-yellow-300'
        } text-gray-900 font-bold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105`}
      >
        ✅ Confirm Booking
      </button>
    </div>
  );
}
