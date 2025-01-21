"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: 'cabin1.jpg',
    alt: 'Misty forest scene',
  },
  {
    id: 2,
    image: 'cabin2.jpg',
    alt: "Hoogeland's Cabins in forest setting",
  },
  {
    id: 3,
    image: 'cabin3.jpg',
    alt: 'Sunset view of cabins with communal fire pit',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end">
          <div className="text-right w-full md:w-1/2 mr-0 md:mr-4">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Welcome to
              <br />
              Hoogeland&apos;s Cabins
            </h2>
            <a
              href="https://book.nightsbridge.com/31928"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-2 hover:bg-white hover:text-black transition-colors"
            >
              Book a stay!
            </a>
          </div>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-yellow-400" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

