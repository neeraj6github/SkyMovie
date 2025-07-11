export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 px-4 text-center">
      <div className="mb-4 flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <i className="fab fa-facebook-f"></i> {/* If you use FontAwesome */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-bold text-white">MovieBooking</span>. All rights reserved.
      </p>
    </footer>
  );
} 

