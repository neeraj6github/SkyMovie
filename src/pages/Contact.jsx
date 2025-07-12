

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headingRef.current, { y: -40, opacity: 0, duration: 1 })
      .from(paragraphRef.current, { y: -20, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(infoRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6
      }, "-=0.4");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 max-w-xl w-full text-center shadow-2xl">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Contact Us
        </h1>
        <p ref={paragraphRef} className="text-lg mb-6 text-gray-200">
          Have questions or need help with your booking? Reach out to us anytime!
        </p>
        <div ref={infoRef} className="space-y-2 text-gray-100 text-lg">
          <p>📧 Email: SkyMovie@gmail.com</p>
          <p>📞 Phone: +91-XXXXXXXXXX</p>
        </div>
      </div>
    </div>
  );
}
