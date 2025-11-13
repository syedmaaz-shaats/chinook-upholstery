"use client";

import Container from "@/components/layout/Container";
import ServiceSidebar from "@/components/layout/ServiceSidebar";
import PageBanner from "@/components/layout/PageBanner";
import { motion } from "framer-motion";

export default function WindowCoveringsPage() {
  return (
    <>
      {/* 🪟 Banner */}
      <PageBanner
        title="Window Coverings"
        slug={[{ label: "Home", href: "/" }, { label: "Window Coverings" }]}
        backgroundImage="/images/gallery/window-covering-2.jpg"
        fixedBg={true}
      />

      {/* 📦 Content */}
      <Container>
        <div className="flex flex-col md:flex-row gap-6 my-10 px-4 md:px-8 lg:px-12">
          <ServiceSidebar />

          {/* Main */}
          <main className="flex-1 bg-white rounded-2xl p-6 md:p-10 shadow-md space-y-16">
            {/* Intro Section */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002f61]">
                Tailored Window Treatments
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nothing gives a room a more complete, refined appearance than
                custom-made window coverings. We create a variety of treatments
                that not only enhance your interior design but also bring out
                the best in your space.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sometimes, all it takes to transform a space is the right
                window treatment. With so many styles and fabrics available,
                choosing the perfect option can feel overwhelming — but we’re
                here to guide you through the process with ease.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Have questions or need advice on what works best for your home?{" "}
                <a
                  href="/contact"
                  className="text-[#002f61] font-semibold hover:underline"
                >
                  Get in touch with us
                </a>{" "}
                anytime — our team is happy to help.
              </p>
            </motion.section>

            {/* Styles Grid */}
            <motion.section
              className="space-y-10 bg-[#f8f9fb] rounded-2xl p-8 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold text-[#002f61] text-center">
                Window Covering Styles
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                Explore our collection of designs that combine practicality with
                visual appeal — all crafted to suit your space perfectly.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {[
                  {
                    title: "Drapery",
                    desc: "Few elements can redefine a room as dramatically as drapery. They introduce texture, warmth, and personality — from soft, flowing sheers that let in natural light to heavy fabrics that create an elegant, grounded atmosphere. Drapery adds height, movement, and color to any space, making it an essential design statement.",
                    img: "/images/gallery/window-drapery.webp",
                  },
                  {
                    title: "Shades",
                    desc: "Our Roller and Solar Shades combine convenience, style, and function. Designed for smooth operation and available in modern textures and colors, they block glare, filter sunlight, and protect interiors from UV rays while preserving your outdoor view. Add trims or tassels for a personalized finish.",
                    img: "/images/gallery/window-shades.webp",
                  },
                  {
                    title: "Verticals",
                    desc: "Ideal for sliding doors or wide window spans, vertical blinds are versatile, sleek, and customizable. You can choose widths that match your window size — from slim to wide vanes. Available in multiple shapes and textures, they offer excellent light control and can even be operated by wand, cord, or wireless remote.",
                    img: "/images/gallery/window-verticals.jpg",
                  },
                  {
                    title: "Valances",
                    desc: "Valances bring a polished, decorative layer to your windows — whether used alone or paired with drapery or blinds. They come in endless styles, from minimal folds to intricate custom shapes. Perfect above windows, doors, or even beds, they complete your design with refined detail and charm.",
                    img: "/images/gallery/window-valance.webp",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="h-56 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="p-6 space-y-3">
                      <h4 className="text-xl font-semibold text-[#002f61]">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Outro */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed">
                Every window covering is designed to balance function and
                aesthetics — whether it’s to filter light, add warmth, or create
                a bold design statement. Our experts help you select and tailor
                every detail.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To learn more about how our window coverings can complement your
                home’s personality,{" "}
                <a
                  href="/contact"
                  className="text-[#002f61] font-semibold hover:underline"
                >
                  reach out to us today
                </a>
                .
              </p>
            </motion.section>
          </main>
        </div>
      </Container>
    </>
  );
}
