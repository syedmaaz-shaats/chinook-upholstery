import Image from "next/image";

export default function ClientsSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#002f61] mb-4">
          Our Clients Come First
        </h2>
        <div className="mx-auto w-20 h-[3px] bg-[#002f61] rounded mb-8"></div>

        {/* Paragraph */}
        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed mb-12">
          At Chinook Upholstery, we pride ourselves on providing craftsmanship
          that meets the exact needs of our clients. Every detail, stitch, and
          finish is tailored to create furniture that reflects your personal
          style — comfortable, elegant, and made to last.
        </p>

        {/* Clients Grid */}
        <h3 className="text-2xl font-semibold text-[#002f61] mb-10">
          Trusted By
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {[
            { src: "/images/clients/mcdonalds.png", alt: "McDonald's" },
            { src: "/images/clients/thekeg.png", alt: "The Keg" },
            { src: "/images/clients/banff.png", alt: "Banff Centre" },
            { src: "/images/clients/coast.png", alt: "Coast Hotels" },
            { src: "/images/clients/core.png", alt: "Core Shopping" },
          ].map((client) => (
            <div
              key={client.alt}
              className="group w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#002f61]/10 hover:shadow-lg"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={70}
                className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
