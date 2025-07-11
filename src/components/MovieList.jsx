import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
