// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you’re looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline">Go back home</Link>
    </div>
  )
}
