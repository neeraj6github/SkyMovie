import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Services() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headingRef.current, { y: -50, opacity: 0, duration: 1 })
      .from(paragraphRef.current, { y: -30, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(listRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6
      }, "-=0.5");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-black px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 max-w-3xl text-center shadow-2xl">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Our Services
        </h1>
        <p ref={paragraphRef} className="text-lg mb-6 text-gray-200">
          SkyMovie provides a seamless movie ticket booking experience with the following services:
        </p>
        <ul ref={listRef} className="text-left list-disc list-inside space-y-3 text-gray-100 text-lg">
          <li>🎟️ Easy online ticket booking for the latest movies</li>
          <li>🔍 Search and filter movies by genre, language, and ratings</li>
          <li>💺 Select seats and view seat availability in real-time</li>
          <li>📱 Mobile-friendly booking process</li>
          <li>🛡️ Secure payment options</li>
          <li>📧 Email and SMS confirmations</li>
        </ul>
      </div>
    </div>
  );
}
