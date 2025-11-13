import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  image: string; // 🆕 added image prop
}

export default function ServiceCard({ title, description, link, image }: ServiceCardProps) {
  return (
    <div
      className="relative p-6 rounded-lg overflow-hidden border shadow-lg hover:shadow-2xl transition"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* === Dark Overlay === */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div>

      {/* === Content === */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <Link
          href={link}
          className="text-white font-medium hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
