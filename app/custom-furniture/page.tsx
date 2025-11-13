"use client";

import Container from "@/components/layout/Container";
import ServiceSidebar from "@/components/layout/ServiceSidebar";
import PageBanner from "@/components/layout/PageBanner";
import { motion } from "framer-motion";

export default function CustomFurniturePage() {
  return (
    <>
      {/* Page Header */}
      <PageBanner
        title="Custom Furniture"
        slug={[{ label: "Home", href: "/" }, { label: "Custom Furniture" }]}
        backgroundImage="/images/gallery/custom-furniture-7.jpg"
        fixedBg={true}
      />

      {/* Page Container */}
      <Container>
        <div className="flex flex-col md:flex-row gap-6 my-10 px-4 md:px-8 lg:px-12">
          {/* Sidebar */}
          <ServiceSidebar />

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-2xl p-6 md:p-10 shadow-md space-y-16">
            {/* Section 1 – Introduction */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002f61]">
                Why Choose Custom Furniture?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                While store-bought furniture may fit a room, custom-made furniture fits
                <em> you</em>. Every piece is built to your exact needs — the design, the
                comfort, the dimensions, and the materials are all chosen to reflect
                your taste and space. Crafted by skilled Canadian artisans, each
                creation is meant to last a lifetime, both in quality and in style.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you go custom, you have access to an infinite palette — any wood,
                metal, or fabric can become part of your design. Even years later, your
                furniture can be reupholstered or refinished to evolve with your home,
                making it a sustainable and timeless investment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Custom furniture does take longer to create — after all, it’s built
                from the ground up with care and precision. But the result is
                something uniquely yours. Have a project in mind?{" "}
                <a
                  href="/contact"
                  className="text-[#002f61] font-semibold hover:underline"
                >
                  Contact us
                </a>{" "}
                or give us a call — we’d love to help bring your idea to life.
              </p>
            </motion.section>

            {/* Section 2 – Process Overview */}
            <motion.section
              className="space-y-10 bg-[#f8f9fb] rounded-2xl p-8 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold text-[#002f61] text-center">
                The Custom Furniture Process
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                Every creation begins with an idea — and we bring that idea to life
                through craftsmanship, detail, and design. Explore how we turn your
                vision into reality step-by-step.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: "Measure",
                    desc: "We start by carefully measuring your space and understanding your layout. This ensures your custom piece fits perfectly in both size and proportion.",
                    img: "/images/gallery/step-one-measure.webp",
                  },
                  {
                    title: "Construction",
                    desc: "Our craftsmen build each frame from solid hardwood, creating a strong foundation designed to last for decades.",
                    img: "/images/gallery/step-two-construction.webp",
                  },
                  {
                    title: "Frame",
                    desc: "Precision-joined frames ensure stability and durability. Every curve and edge is shaped by hand for a refined finish.",
                    img: "/images/gallery/step-three-frame.jpg",
                  },
                  {
                    title: "Webbing",
                    desc: "High-quality webbing provides flexible support for cushioning — the secret to comfort that lasts.",
                    img: "/images/gallery/step-three-webbing.webp",
                  },
                  {
                    title: "Finish",
                    desc: "Our finishing process brings out the wood’s natural beauty with your chosen stain, texture, and protective coating.",
                    img: "/images/gallery/step-four-finish.jpg",
                  },
                  {
                    title: "Cutting",
                    desc: "We precisely cut materials to match your custom design — ensuring every pattern and edge aligns seamlessly.",
                    img: "/images/gallery/step-five-cutting-482x482.jpg",
                  },
                  {
                    title: "Sewing",
                    desc: "Expert stitching ensures clean lines and lasting strength. We tailor each seam for both beauty and durability.",
                    img: "/images/gallery/step-six-sewing.webp",
                  },
                  {
                    title: "Cushion",
                    desc: "Comfort meets craftsmanship — we use premium foam and fill combinations for the perfect feel and resilience.",
                    img: "/images/gallery/step-seven-cushion.webp",
                  },
                  {
                    title: "Upholstery",
                    desc: "Our upholstery specialists bring everything together, wrapping your furniture in the chosen fabrics with precision and artistry.",
                    img: "/images/gallery/upholstery-stage.jpg",
                  },
                  {
                    title: "Packing & Installing",
                    desc: "Finally, we carefully package and deliver your piece. Our team installs it in your home, ready for you to enjoy.",
                    img: "/images/gallery/step-nine-packing.jpg",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div
                      className="h-56 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="p-6 space-y-3">
                      <h4 className="text-xl font-semibold text-[#002f61]">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </main>
        </div>
      </Container>
    </>
  );
}
