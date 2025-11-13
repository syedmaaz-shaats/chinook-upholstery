"use client";
import Link from "next/link";
import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  /* breadcrumb segments, each may be { label, href } or string (label only) */
  slug?: Array<{ label: string; href?: string } | string>;
  backgroundImage?: string; // path to image in /public or external URL
  fixedBg?: boolean; // if true, uses bg-fixed behavior
  ctaText?: string;
  ctaLink?: string;
  heightClass?: string; // optional override for banner height (e.g. "h-64", "h-96")
}

export default function PageBanner({
  title,
  subtitle,
  slug = [],
  backgroundImage = "/images/hero.jpg",
  fixedBg = false,
  ctaText,
  ctaLink,
  heightClass = "h-64 md:h-96",
}: PageBannerProps) {
  const bgClasses = fixedBg ? "bg-fixed bg-center bg-cover" : "bg-center bg-cover";

  return (
    <header
      aria-label={`${title} banner`}
      className={`relative ${heightClass} ${bgClasses}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
        {/* Breadcrumb / slug */}
        {slug && slug.length > 0 && (
          <nav className="text-sm mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-200">
              {slug.map((s, i) => {
                const isLast = i === slug.length - 1;
                if (typeof s === "string") {
                  return (
                    <li key={i} className={`truncate ${isLast ? "font-semibold text-white" : ""}`}>
                      <span className={isLast ? "text-white" : "text-gray-200/90"}>{s}</span>
                      {!isLast && <span className="mx-2 text-gray-200/60">/</span>}
                    </li>
                  );
                } else {
                  return (
                    <li key={i} className="truncate">
                      {s.href && !isLast ? (
                        <>
                          <Link href={s.href} className="text-gray-200/90 hover:text-white">
                            {s.label}
                          </Link>
                          <span className="mx-2 text-gray-200/60">/</span>
                        </>
                      ) : (
                        <span className={isLast ? "text-white font-semibold" : "text-gray-200/90"}>
                          {s.label}
                        </span>
                      )}
                    </li>
                  );
                }
              })}
            </ol>
          </nav>
        )}

        {/* Title / Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight drop-shadow-sm">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-sm md:text-lg text-gray-100/90 max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* CTA */}
          {ctaText && ctaLink && (
            <div className="mt-6">
              <Link
                href={ctaLink}
                className="inline-block bg-white text-[#002f61] font-semibold px-6 py-2 rounded-full shadow hover:opacity-95 transition"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* optional decorative image (keeps layout stable for SEO) */}
      {/* If you prefer Next/Image background optimization, replace inline style with an absolutely positioned Image with object-cover */}
    </header>
  );
}
