import React, { useState, useEffect } from "react";

const VocesPublico = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const testimonials = [
    {
      quote: "Lo más brutal que ha pasado en Trujillo en años.",
      city: "Trujillo",
      author: "Anónimo",
    },
    {
      quote: "Nunca había sentido una fiesta así en Pucallpa.",
      city: "Pucallpa",
      author: "Anónimo",
    },
    {
      quote: "DJ Paul tiene ese control de energía que no se enseña.",
      city: "Arequipa",
      author: "Anónimo",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoSliding, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 10000);
  };

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Voces del Público
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-6xl overflow-hidden">
          {/* Testimonials - 3 per view on desktop */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4 md:w-1/3"
              >
                <div className="h-full rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl md:p-10">
                  {/* Quote Icon */}
                  <div className="mb-6 text-6xl text-purple-500 opacity-30">"</div>

                  {/* Quote Text */}
                  <blockquote className="mb-8 text-xl font-medium leading-relaxed text-gray-800 md:text-2xl">
                    {testimonial.quote}
                  </blockquote>

                  {/* City Badge */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-bold text-white">
                      <span>📍</span>
                      <span>{testimonial.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-slide indicator */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsAutoSliding(!isAutoSliding)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {isAutoSliding ? "⏸ Pausar" : "▶️ Continuar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VocesPublico;
