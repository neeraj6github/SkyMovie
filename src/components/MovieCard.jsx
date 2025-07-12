import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div className="relative flex flex-col rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 group">
      
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      
      <div className="absolute bottom-0 left-0 p-4 z-10 text-white w-full">
        <h3 className="text-xl font-bold mb-1 break-words drop-shadow">
          🎬 {movie.title}
        </h3>
        <p className="text-gray-200 mb-3">{movie.genre}</p>
        <Link
          to={`/movies/${movie.id}`}
          className="inline-block bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition transform hover:scale-105"
        >
          🎟️ Book Now
        </Link>
      </div>
    </div>
  );
}
