import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
    })
      .from(
        paragraphRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        buttonRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-32 px-4">
      <h2
        ref={headingRef}
        className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight"
      >
        Book Your Favorite Movies Now!
      </h2>
      <p
        ref={paragraphRef}
        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
      >
        Browse from a collection of 100+ top-rated Hollywood, Bollywood & South movies.
      </p>
      <a
        ref={buttonRef}
        href="/movies"
        className="inline-block bg-white text-purple-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-purple-100 hover:scale-105 transition-transform duration-300"
      >
        🎟️ Explore Movies
      </a>
    </section>
  );
}
