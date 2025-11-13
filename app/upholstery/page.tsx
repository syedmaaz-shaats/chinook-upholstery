"use client";

import Container from "@/components/layout/Container";
import ServiceSidebar from "@/components/layout/ServiceSidebar";
import PageBanner from "@/components/layout/PageBanner";
import { motion } from "framer-motion";

export default function UpholsteryPage() {
  return (
    <>
      {/* Page Header */}
      <PageBanner
        title="Upholstery"
        slug={[{ label: "Home", href: "/" }, { label: "Upholstery" }]}
        backgroundImage="/images/gallery/custom-upholstery-15.jpg"
        fixedBg={true}
      />

      {/* Page Container */}
      <Container>
        <div className="flex flex-col md:flex-row gap-6 my-10 px-4 md:px-8 lg:px-12">
          {/* Sidebar */}
          <ServiceSidebar />

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-2xl p-6 md:p-10 shadow-md space-y-16">
            {/* Section 1 */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002f61]">
                Premium Upholstery Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our experience allows us to fully cater to our clients’ every request, know the materials and how they perform best,
                as well as ensure quality through the completion of the project. We carry a large range of fabrics from select suppliers,
                giving you an almost unlimited selection of the highest quality upholstery fabrics to suit your design.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              className="space-y-6 bg-[#f8f9fb] rounded-2xl p-8 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-[#002f61]">Our Expertise</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Antique furniture restoration and upholstery</li>
                <li>Upholstery repairs, fixing springs, leather and fabric repairs</li>
                <li>Repair of wooden floors including laminates</li>
                <li>Complete furniture refinishing services</li>
                <li>Custom new builds to perfectly suit your décor</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Almost anything is possible — from repairing that old antique to making something new that fits your vision.
              </p>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-[#002f61]">Why Upholstery Is Important</h3>
              <p className="text-gray-700 leading-relaxed">
                Fabric creates a first and lasting impression on people, so it’s essential that it looks perfect.
                When selecting materials, we consider how easy they are to upholster, the nature of the pile, colors, and textures —
                all of which affect how the fabric will look and feel over time.
              </p>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              className="grid md:grid-cols-2 gap-10 bg-[#f8f9fb] rounded-2xl p-8 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h4 className="text-xl font-semibold text-[#002f61] mb-3">Type of Stitching</h4>
                <p className="text-gray-700 leading-relaxed">
                  We use a variety of stitching techniques depending on the furniture’s shape and style.
                  Plain seams are often paired with piping to create a clean, defined profile.
                  Our double topstitch technique gives added strength, maintains crisp lines, and enhances the piece’s form —
                  ensuring it looks perfect for years to come.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#002f61] mb-3">Form & Foam</h4>
                <p className="text-gray-700 leading-relaxed">
                  High-quality foam is at the heart of durable, comfortable upholstery.
                  We use dense foam that maintains its shape over time without sacrificing softness —
                  a hallmark of true craftsmanship that balances beauty with long-lasting comfort.
                </p>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              className="text-center py-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Time and time again we focus on both aesthetics and function. In a modern lifestyle, furniture must be as practical as it is beautiful.
                If you have any questions or need more information about our upholstery services, feel free to{" "}
                <a
                  href="/contact"
                  className="text-[#002f61] font-semibold hover:underline"
                >
                  contact us
                </a>{" "}
                — we’re here to help bring your vision to life.
              </p>
            </motion.section>

            {/* Section 6 – Design Styles */}
            <motion.section
              className="space-y-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-[#002f61] text-center">
                Upholstery Design Styles
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                From timeless classics to bold contemporary statements, we create upholstery that captures the spirit of your space. 
                Explore a few of our most requested design styles below.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {/* Traditional */}
                <div className="bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/gallery/traditional.png')" }} />
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-semibold text-[#002f61]">Traditional</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Inspired by the grace of Queen Anne and Chippendale eras, traditional upholstery emphasizes symmetry, rich fabrics,
                      and elegant curves that never go out of style.
                    </p>
                  </div>
                </div>

                {/* Modern */}
                <div className="bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/gallery/modern.png')" }} />
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-semibold text-[#002f61]">Modern</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Modern design embraces simplicity — clean silhouettes, neutral tones, and materials like steel, leather, and glass
                      create a refined minimalist aesthetic.
                    </p>
                  </div>
                </div>

                {/* Contemporary */}
                <div className="bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/gallery/contemporary.png')" }} />
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-semibold text-[#002f61]">Contemporary</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Contemporary pieces reflect today’s living — fluid shapes, soft edges, and comfort-first design that merges art with practicality.
                    </p>
                  </div>
                </div>

                {/* Creative */}
                <div className="bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/gallery/creative.png')" }} />
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-semibold text-[#002f61]">Creative</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We love blending styles — mixing traditional craftsmanship with daring colors, materials, and forms that make a statement.
                    </p>
                  </div>
                </div>

                {/* Style */}
                <div className="bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/gallery/style.png')" }} />
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-semibold text-[#002f61]">Style Evolution</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Upholstery has evolved — modern designs now merge art and comfort, with bold colors, patterns, and textures that bring furniture to life.
                    </p>
                  </div>
                </div>

                {/* Variations */}
                <div className="bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/gallery/variations.png')" }} />
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-semibold text-[#002f61]">Custom Variations</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Whether you prefer understated or extravagant, our craftsmen can tailor every detail — from stitching to finish — to match your exact vision.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </main>
        </div>
      </Container>
    </>
  );
}
