import HeroSection from '../components/HeroSection'
import MovieList from '../components/MovieList'
import { movies } from '../data/movies'

export default function Home() {
  const featuredMovies = movies.slice(0, 5)
  return (
    <>
      <HeroSection />
      <h2 className="text-2xl font-bold text-center my-4">Featured Movies</h2>
      <MovieList movies={featuredMovies} />
    </>
  )
}
