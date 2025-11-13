"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryItems = [
  {
    src: "/images/gallery/custom-upholstery-14-1400x800.jpg",
    caption: "Modern living room set with custom grey upholstery.",
  },
  {
    src: "/images/gallery/custom-upholstery-1.jpg",
    caption: "Classic wingback chair — detailed hand-tufted finish.",
  },
  {
    src: "/images/gallery/custom-upholstery-2.jpg",
    caption: "Elegant lounge chair paired with soft cream tones.",
  },
  {
    src: "/images/gallery/custom-upholstery-3-500x500.jpg",
    caption: "Colorful custom cushions designed for a cozy touch.",
  },
  {
    src: "/images/gallery/custom-upholstery-4-300x293.jpg",
    caption: "Timeless chesterfield sofa in soft neutral fabric.",
  },
  {
    src: "/images/gallery/custom-upholstery-5-300x300.jpg",
    caption: "Floral patterned armchair with vintage charm.",
  },
  {
    src: "/images/gallery/custom-upholstery-6-1000x800.jpg",
    caption: "Minimalist recliners crafted for comfort and style.",
  },
  {
    src: "/images/gallery/custom-upholstery-8-500x695.jpg",
    caption: "Cozy dining nook with custom upholstered seating.",
  },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryItems.length
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-[#f0e9e6] py-20 px-6">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#002f61] mb-3">
          Our Work Gallery
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Explore our craftsmanship and interior design projects.
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm md:text-base font-medium">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white hover:text-gray-400 transition"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white hover:text-gray-400 transition"
            aria-label="Previous"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image + Caption */}
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-[4/3] max-h-[80vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].caption}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-medium">
              {galleryItems[selectedIndex].caption}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white hover:text-gray-400 transition"
            aria-label="Next"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}
