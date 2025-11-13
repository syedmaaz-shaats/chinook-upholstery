"use client";
import Image from "next/image";

export default function BrandsClientsSection() {
  const fabrics = [
    "/images/brands/alendel.png",
    "/images/brands/avantgarde.png",
    "/images/brands/robertallen.png",
    "/images/brands/tritex.png",
    "/images/brands/unique.png",
    "/images/brands/maxwell.png",
    "/images/brands/barrow.png",
    "/images/brands/charlottle.png",
    "/images/brands/elite.png",
    "/images/brands/ennis.png",
    "/images/brands/fabricut.png",
    "/images/brands/jacksons.png",
    "/images/brands/jf.png",
    "/images/brands/kravet.png",
    "/images/brands/pindler.png",
    "/images/brands/maharam.jpg",
    "/images/brands/momentum.jpg",
  ];

  const clients = [
    "/images/clients/mcdonalds.png",
    "/images/clients/thekeg.png",
    "/images/clients/banff.jpg",
    "/images/clients/coast.png",
    "/images/clients/core.jpg",
  ];

  return (
    <section className="bg-white py-20 px-6">

      {/* Fabric Brands */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002f61]">
          Some of our Fabrics Brand
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mt-15 mx-auto">
          {fabrics.map((src, index) => (
            <div
              key={index}
              className="relative w-28 h-14 grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={src}
                alt={`Fabric Brand ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 120px"
                className="object-contain"
                />
            </div>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-4xl mx-auto border-t border-gray-300 my-12"></div>

      {/* Clients */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002f61]">
          Our Clients
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-4xl mx-auto mt-10">
          {clients.map((src, index) => (
            <div
              key={index}
              className="relative w-28 h-14 grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={src}
                alt={`Client ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 120px"
                className="object-contain"
               />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
