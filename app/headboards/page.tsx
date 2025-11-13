"use client";

import Container from "@/components/layout/Container";
import ServiceSidebar from "@/components/layout/ServiceSidebar";
import PageBanner from "@/components/layout/PageBanner";
import { motion } from "framer-motion";

export default function HeadboardsPage() {
  return (
    <>
      {/* 🏞️ Page Header */}
      <PageBanner
        title="Headboards"
        slug={[{ label: "Home", href: "/" }, { label: "Headboards" }]}
        backgroundImage="/images/gallery/headboard-8.jpg"
        fixedBg={true}
      />

      {/* 📦 Page Container */}
      <Container>
        <div className="flex flex-col md:flex-row gap-6 my-10 px-4 md:px-8 lg:px-12">
          {/* Sidebar */}
          <ServiceSidebar />

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-2xl p-6 md:p-10 shadow-md space-y-16">
            {/* Section 1 – Intro */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002f61]">
                Upholstered Headboards
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Upholstered headboards create a dramatic focal point in the bedroom while offering a softer backrest for pillows and bedspreads. The design options for headboards are endless — and you don’t need to be an interior designer to achieve your dream look.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Headboards are an essential element in any bedroom’s décor. They add character, balance, and a sense of completion to the space. The style you choose depends on your personal taste, the size of the room, and the atmosphere you want to create.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bring your ideas, pictures, and fabric samples — and together we’ll craft a headboard you’ll love for years to come. The more details you share, the more perfectly we can match your vision.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Chinook Upholstery, we’re dedicated to making your concept a reality. Visit our showroom to explore our collection of unique, custom-built headboards. And if you don’t see exactly what you’re looking for, come talk to us — we’ll design one just for you.
              </p>
            </motion.section>

            {/* Section 2 – Styles Overview */}
            <motion.section
              className="space-y-10 bg-[#f8f9fb] rounded-2xl p-8 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold text-[#002f61] text-center">
                Explore Headboard Styles
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                Whether you prefer timeless elegance or modern simplicity, every style adds its own charm to the bedroom. Here are some of the most popular designs our clients love.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: "Tufted Headboard",
                    desc: "Tufted headboards are a popular choice because of the cozy and inviting atmosphere they create. Depending on the size and design, they can make your bedroom feel elegant, warm, or contemporary.",
                    img: "/images/gallery/headboard-tufted.png",
                  },
                  {
                    title: "Upholstered Headboard",
                    desc: "Upholstered headboards fit beautifully in traditional and transitional bedrooms. With the right fabric and detailing, they bring warmth, comfort, and timeless appeal to your space.",
                    img: "/images/gallery/headboards-upholstery.png",
                  },
                  {
                    title: "Upholstered Wall",
                    desc: "A modern alternative to the classic design — an upholstered wall that replaces the headboard entirely. Panels, textures, and stitching patterns turn your wall into an art piece.",
                    img: "/images/gallery/headboards-wall.jpg",
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
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Section 3 – Final Note */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed">
                Whether you’re looking for a full bed headboard, a queen-sized design, or a wall-to-wall statement piece — we can design one that fits your space and complements your décor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Share your ideas with us — our design team can bring your vision to life with precision and care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or need help deciding what’s best for your bedroom,{" "}
                <a
                  href="/contact"
                  className="text-[#002f61] font-semibold hover:underline"
                >
                  contact us
                </a>{" "}
                anytime — we’d love to assist you.
              </p>
            </motion.section>
          </main>
        </div>
      </Container>
    </>
  );
}
