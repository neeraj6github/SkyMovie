
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function About() {
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } })

    tl.from(cardRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
    })
    .from(headingRef.current, {
      y: -50,
      opacity: 0,
    }, "-=0.6")
    .from(paraRef.current, {
      y: 50,
      opacity: 0,
    }, "-=0.5")
  }, [])

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden px-4 py-20">
      
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 rounded-full filter blur-3xl animate-pulse mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-pulse mix-blend-multiply delay-2000"></div>
      
      
      <div 
        ref={cardRef}
        className="relative z-10 max-w-3xl backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-2xl"
      >
        <h1 
          ref={headingRef} 
          className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
        >
          About <span className="text-purple-400">SkyMovie</span>
        </h1>
        <p 
          ref={paraRef} 
          className="text-lg text-gray-300"
        >
          SkyMovie is your modern movie booking platform where you can browse, search,
          and book tickets for your favorite movies with ease.
        </p>
      </div>
    </div>
  )
}
