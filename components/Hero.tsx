"use client";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* === Background Video (scrolls but looks fixed within section) === */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/images/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            transform: "translateZ(0)",
            willChange: "transform",
            filter: "brightness(0.85)",
          }}
        />
      </div>

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* === Content === */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-200">{subtitle}</p>
        <a
          href={ctaLink}
          className="mt-8 inline-block bg-[#002f61] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00448a] transition-all duration-200 shadow-md"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
