import { useState } from 'react'
import { movies } from '../data/movies'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filtered.length > 0 ? (
        <MovieList movies={filtered} />
      ) : (
        <p className="text-red-500">Sorry, no movies found. Please try another search!</p>
      )}
    </div>
  )
}
