"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tibisay Orozco",
    rating: 5,
    text: "I am very pleased with the work done. The lady at the reception is so helpful and patient. I highly recommend them.",
  },
  {
    name: "Beth Backman",
    rating: 5,
    text: "Very professional and very helpful. Spent a lot of time going over fabrics, pricing and cushion material choices with us. Alanna is extremely knowledgeable and professional.",
  },
  {
    name: "Anton Steyn",
    rating: 5,
    text: "It was nice to do business with Corinne and Peter. There are still a few professional and good people in business. Great job! Thank you!",
  },
  {
    name: "Thierry J.",
    rating: 5,
    text: "They redid our coach cushion. See the before after... Price is good and the quality of their work is great. Thanks a lot.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f0e9e6] text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-[#002f61] font-semibold mb-2">Testimonials</h2>
        <p className="text-gray-700">See what people are saying</p>
      </div>

      <div className="relative flex items-center justify-center max-w-5xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-0 z-30 p-3 sm:p-4 rounded-full bg-[#002f61]/80 hover:bg-[#002f61] transition focus:outline-none shadow-lg"
        >
          <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Cards Container */}
        <div className="relative w-full flex items-center justify-center h-[340px]">
          {testimonials.map((t, idx) => {
            const position =
              idx === current
                ? "active"
                : idx === (current - 1 + testimonials.length) % testimonials.length
                ? "prev"
                : idx === (current + 1) % testimonials.length
                ? "next"
                : "hidden";

            return (
              <div
                key={idx}
                className={`
                  absolute w-[90%] sm:w-[70%] md:w-[60%] transition-all duration-700 ease-in-out
                  ${position === "active" ? "opacity-100 scale-100 z-20" : ""}
                  ${position === "prev" ? "opacity-40 scale-90 -translate-x-1/2 z-10" : ""}
                  ${position === "next" ? "opacity-40 scale-90 translate-x-1/2 z-10" : ""}
                  ${position === "hidden" ? "opacity-0 scale-75 z-0" : ""}
                `}
              >
                <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 sm:p-10 text-center relative">
                  <Quote className="text-[#002f61] w-8 h-8 mx-auto mb-4" />
                  <p className="text-gray-700 mb-6 italic transition-all duration-500">
                    “{t.text}”
                  </p>
                  <div className="font-semibold text-lg text-[#002f61]">{t.name}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-0 z-30 p-3 sm:p-4 rounded-full bg-[#002f61]/80 hover:bg-[#002f61] transition focus:outline-none shadow-lg"
        >
          <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-[#002f61]" : "bg-[#002f61]/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
