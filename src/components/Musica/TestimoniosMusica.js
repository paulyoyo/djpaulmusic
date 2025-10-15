import React, { useState } from "react";

const TestimoniosMusica = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "El mejor set que he escuchado en Arequipa.",
      author: "María L.",
      city: "Arequipa",
      photo: "/images/testimonials/avatar1.jpg",
    },
    {
      quote: "DJ Paul no solo mezcla música, mezcla energía.",
      author: "Carlos R.",
      city: "Lima",
      photo: "/images/testimonials/avatar2.jpg",
    },
    {
      quote: "Cada intro suena como si fuera hecha para la ciudad.",
      author: "Andrea M.",
      city: "Trujillo",
      photo: "/images/testimonials/avatar3.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Lo Que Dicen del Show
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Testimonial Cards - Horizontal Scroll */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-xl md:p-12">
                    {/* Quote Icon */}
                    <div className="mb-6 text-6xl text-purple-500 opacity-20">
                      "
                    </div>

                    {/* Quote Text */}
                    <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-gray-800 md:text-3xl">
                      {testimonial.quote}
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                        <div className="h-full w-full overflow-hidden rounded-full bg-gray-200">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.author}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          📍 {testimonial.city}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:scale-110"
            aria-label="Anterior testimonio"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosMusica;
