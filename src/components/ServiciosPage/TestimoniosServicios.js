import React from "react";

const TestimoniosServicios = () => {
  const testimonials = [
    {
      quote:
        "DJ Paul elevó la fiesta de aniversario de nuestra marca al siguiente nivel.",
      author: "BTL Agency",
      city: "Lima",
    },
    {
      quote:
        "Nuestro matrimonio fue una locura, cada momento tuvo su canción perfecta.",
      author: "Carla & Diego",
      city: "Trujillo",
    },
    {
      quote: "Su energía en discotecas de provincias es incomparable.",
      author: "Club Ícono",
      city: "Arequipa",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Testimonios
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* 3-Column Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-5xl text-purple-500 opacity-30">"</div>

              {/* Quote */}
              <blockquote className="mb-6 text-lg leading-relaxed text-gray-700">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">📍 {testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosServicios;
