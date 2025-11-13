"use client";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#002f61] text-white lg:py-30 md:py-20 py-20 px-6 md:px-16 lg:px-10 rounded-2xl shadow-md text-center md:text-left">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Serving Calgary and area for over 25 years.
        </h2>

        <p className="text-lg text-gray-200 mb-6">
          Daunted by the thought of searching all of Calgary for the upholstery, drapery or flooring you want?
        </p>

        <p className="text-base text-gray-300 leading-relaxed mb-8">
          We open up a world of possibilities in creating your own custom look – easily and efficiently.
          Over 800 books of colour, pattern and style samples are available to inspire you.
          Interior designers are available to work with you at the store or in your home or business to help
          coordinate all the elements.
        </p>

        <Link
          href="/about"
          className="inline-block bg-white text-[#002f61] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-all duration-200"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
